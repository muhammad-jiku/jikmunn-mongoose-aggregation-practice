import { Router } from 'express';
import {
  createCustomer,
  getCustomers,
} from '../controllers/customerControllers';

const customerRouter = Router();

customerRouter.post('/', createCustomer);
customerRouter.get('/', getCustomers);

export default customerRouter;
