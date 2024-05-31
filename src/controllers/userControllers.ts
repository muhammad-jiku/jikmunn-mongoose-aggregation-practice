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

// Task 4: Find all users over 30 whose favorite color is "green".
export const getGreenClrLoverUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.aggregate([
      { $match: { age: { $gt: 30 }, 'favorites.color': 'green' } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
export const getTheShawshankRedemptionLoverUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.aggregate([
      { $match: { 'favorites.movie': 'The Shawshank Redemption' } },
      { $count: 'totalUsers' },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
export const updateZipCode = async (req: Request, res: Response) => {
  try {
    const { email, zipcode } = req.body; // email would be johndoe@example.com and zipcode would be 10002
    const users = await User.findOneAndUpdate(
      { email },
      { $set: { 'address.zipcode': zipcode } },
      { new: true }
    );
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body; // email would be alicewilliams@example.com
    const users = await User.findOneAndDelete({ email });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
export const getUsersByGroupOfFvrtMovie = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await await User.aggregate([
      { $group: { _id: '$favorites.movie', averageAge: { $avg: '$age' } } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Task 9: Calculate the average age of users with "pizza" as their favorite food.
export const getUsersByGroupOfFvrtFood = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await await User.aggregate([
      { $match: { '$favorites.food': 'pizza' } },
      { $group: { _id: null, averageAge: { $avg: '$age' } } },
      { $project: { _id: 0, averageAge: 1 } },
    ]);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
