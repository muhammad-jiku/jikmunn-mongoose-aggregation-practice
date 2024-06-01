import { Router } from 'express';
import {
  createOrder,
  getOrders,
  getOrdersByCustomerDetails,
} from '../controllers/orderControllers';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', getOrders);
orderRouter.get('/customer-details', getOrdersByCustomerDetails);

export default orderRouter;
