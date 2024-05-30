import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUsersInNewYork,
  getUsersAndTheirFvrtMovies,
  getPizzaLoverUsers,
  getGreenClrLoverUsers,
  getTheShawshankRedemptionLoverUsers,
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
userRouter.get('/favorite-color/green', getGreenClrLoverUsers);
userRouter.get(
  '/favorite-movie/the-shawshank-redemption',
  getTheShawshankRedemptionLoverUsers
);

export default userRouter;
