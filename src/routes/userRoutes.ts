import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userControllers';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);

export default userRouter;
