import { Schema, model, Document } from 'mongoose';

interface IOrder extends Document {
  order_number: string;
  customer_id: number;
  total_amount: number;
}

const orderSchema = new Schema({
  order_number: {
    type: String,
    required: true,
  },
  customer_id: {
    type: Number,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
});

const Order = model<IOrder>('Order', orderSchema);

export default Order;
export type { IOrder };
