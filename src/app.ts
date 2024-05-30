import express, { Request, Response } from 'express';
import { config } from 'dotenv';
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
