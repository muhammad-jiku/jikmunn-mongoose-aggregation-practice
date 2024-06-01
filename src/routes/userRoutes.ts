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
  getUsersByCommonFvrtFood,
  getUsersByCalcOfTotalFriends,
  getUsersByLongestName,
  getUsersByStatesOfAddress,
  getUsersByHighestFriends,
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
userRouter.get('/group/common-favorite-food', getUsersByCommonFvrtFood);
userRouter.get('/total-friends', getUsersByCalcOfTotalFriends);
userRouter.get('/longest-name', getUsersByLongestName);
userRouter.get('/state', getUsersByStatesOfAddress);
userRouter.get('/highest-friends', getUsersByHighestFriends);

export default userRouter;
