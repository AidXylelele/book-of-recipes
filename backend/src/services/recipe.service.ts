import { Recipe } from "../models/Recipe";
import { IRecipe } from "../types/recipe.type";
import { filterConfigurator } from "../utils/database-query-configurator.util";

export class RecipeService {
  static async create(data: IRecipe) {
    const newRecipe = new Recipe(data);
    return newRecipe.save();
  }

  static async update(_id: string, data: IRecipe) {
    return Recipe.findOneAndUpdate({ _id }, data, { new: true }).exec();
  }

  static async delete(_id: string) {
    return Recipe.deleteOne({ _id });
  }

  static async findAll() {
    return Recipe.find();
  }

  static async getAllRecipesByFilter(
    user_id: string,
    category: any,
    isPrivate: any,
    search: any
  ): Promise<IRecipe[] | null> {
    const query = filterConfigurator({ user_id, category, isPrivate }, search);
    return await Recipe.find(query);
  }

  static async findById(_id: string) {
    return Recipe.findOne({ _id });
  }
}
