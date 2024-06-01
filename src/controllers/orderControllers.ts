import { Request, Response } from 'express';
import Order from '../models/Order';

// create orders
export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
};

// get all orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 10: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.
export const getOrdersByCustomerDetails = async (
  req: Request,
  res: Response
) => {
  try {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'customers',
          localField: 'customer_id',
          foreignField: '_id',
          as: 'customerDetails',
        },
      },
      { $unwind: '$customerDetails' },
    ]);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
};
