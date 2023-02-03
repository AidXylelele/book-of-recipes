import { Model, model, Schema } from "mongoose";
import { IProduct } from "../types/product.type";

const productSchema: Schema<IProduct> = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const Product: Model<IProduct> = model("Product", productSchema);
