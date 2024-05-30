import { Schema, model, Document } from 'mongoose';

interface IAddress {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface IFavorite {
  color: string;
  food: string;
  movie: string;
}

interface IFriend {
  name: string;
  email: string;
}

interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  address: IAddress;
  favorites: IFavorite;
  friends: IFriend[];
}

const addressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

const favoriteSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
});

const friendSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  favorites: {
    type: favoriteSchema,
    required: true,
  },
  friends: {
    type: [friendSchema],
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
export type { IUser };
