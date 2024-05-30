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

// Task 1: Find all users who are located in New York.
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

// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
export const getUsersAndTheirFvrtMovies = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.aggregate([
      { $match: { email: 'johndoe@example.com' } },
      { $project: { _id: 0, 'favorites.movie': 1 } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
export const getPizzaLoverUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.aggregate([
      { $match: { 'favorites.food': 'pizza' } },
      { $sort: { age: 1 } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
