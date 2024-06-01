import { Router } from 'express';
import { createOrder } from '../controllers/orderControllers';

const orderRouter = Router();

orderRouter.post('/', createOrder);

export default orderRouter;
