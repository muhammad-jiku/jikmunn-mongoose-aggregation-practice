import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUsersInNewYork,
  getUsersAndTheirFvrtMovies,
  getPizzaLoverUsers,
  getGreenClrLoverUsers,
  getTheShawshankRedemptionLoverUsers,
  updateZipCode,
  deleteUser,
  getUsersByGroupOfFvrtMovie,
  getUsersByGroupOfFvrtFood,
  getUsersByGroupOfFvrtColorAndTotalNumbersOfThem,
  getUsersByHighestAge,
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
userRouter.put('/update/zip-code', updateZipCode);
userRouter.delete('/delete', deleteUser);
userRouter.get('/group/favorite-movies', getUsersByGroupOfFvrtMovie);
userRouter.get('/group/favorite-food/pizza', getUsersByGroupOfFvrtFood);
userRouter.get(
  '/group/favorite-color',
  getUsersByGroupOfFvrtColorAndTotalNumbersOfThem
);
userRouter.get('/highest-age', getUsersByHighestAge);

export default userRouter;
