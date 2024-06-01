import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/orderControllers';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', getOrders);

export default orderRouter;
