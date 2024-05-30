import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUsersInNewYork,
  getUsersAndTheirFvrtMovies,
  getPizzaLoverUsers,
} from '../controllers/userControllers';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/new-york', getUsersInNewYork);
userRouter.get(
  '/johndoe@example.com/favorite-movies',
  getUsersAndTheirFvrtMovies
);
userRouter.get('/favorite-food/pizza', getPizzaLoverUsers);

export default userRouter;
