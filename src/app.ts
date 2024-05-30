import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import userRouter from './routes/userRoutes';
config();

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
