import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUsersInNewYork,
} from '../controllers/userControllers';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/new-york', getUsersInNewYork);

export default userRouter;
