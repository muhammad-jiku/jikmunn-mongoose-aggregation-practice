import { Request, Response } from 'express';
import Customer from '../models/Customer';

// create customers
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
};
