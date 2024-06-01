import { Router } from 'express';
import { createCustomer } from '../controllers/customerControllers';

const customerRouter = Router();

customerRouter.post('/', createCustomer);

export default customerRouter;
