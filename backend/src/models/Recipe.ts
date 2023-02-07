import { Model, model, Schema } from "mongoose";
import { IRecipe } from "../types/recipe.type";
import { IRecipeProduct } from "../types/product.type";

const recipeSchema: Schema<IRecipe> = new Schema({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array<IRecipeProduct>,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  photoLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const Recipe: Model<IRecipe> = model("Recipe", recipeSchema);
