import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import userRouter from './routes/userRoutes';
import orderRouter from './routes/orderRoutes';
import customerRouter from './routes/customerRoutes';

export const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    limit: '25mb',
    extended: true,
  })
);
app.disable('x-powered-by'); // less hackers know about our stack

// displaying welcome message
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome here!',
  });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/customers', customerRouter);
