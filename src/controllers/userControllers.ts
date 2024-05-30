import { Request, Response } from 'express';
import User from '../models/User';

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

// get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// task one: get users in new york
export const getUsersInNewYork = async (req: Request, res: Response) => {
  try {
    const users = await User.aggregate([
      { $match: { 'address.city': 'New York' } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
