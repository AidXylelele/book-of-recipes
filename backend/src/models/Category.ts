import { Model, model, Schema } from "mongoose";
import { ICategory } from "../types/category.type";

const categorySchema: Schema<ICategory> = new Schema({
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

export const Category: Model<ICategory> = model("Category", categorySchema);
