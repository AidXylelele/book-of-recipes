import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  category: string;
  amount: number;
  user_id: string;
}
