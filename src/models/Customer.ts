import { Schema, model, Document } from 'mongoose';

interface ICustomer extends Document {
  _id: number;
  name: string;
  email: string;
}

const customerSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Customer = model<ICustomer>('Customer', customerSchema);

export default Customer;
export type { ICustomer };
