import { Model, model, Schema } from "mongoose";
import { IRecipe, Product } from "../types/recipe.type";

const recipeSchema: Schema<IRecipe> = new Schema({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array<Product>,
    required: true,
  },
  videoLink: {
    type: String,
    required: true
  },
  photoLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export const Recipe: Model<IRecipe> = model("Recipe", recipeSchema);

