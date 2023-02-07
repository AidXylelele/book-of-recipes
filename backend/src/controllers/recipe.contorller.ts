import {
  IRecipe,
  IRecipeFiltersRequest,
  IRecipeRequest,
} from "../types/recipe.type";
import { RecipeService } from "../services/recipe.service";

export class RecipeController {
  static async getByIdRecipe(req: IRecipeRequest) {
    const { params } = req;
    const { id } = params;
    return await RecipeService.findById(id);
  }

  static async getAllRecipes(
    req: IRecipeFiltersRequest
  ): Promise<IRecipe[] | null> {
    const { user } = req;
    const { search, status, isPrivate } = req.query;
    return await RecipeService.getAllRecipesByFilter(
      user.id,
      status,
      search,
      isPrivate
    );
  }

  static async createRecipe(req: IRecipeRequest) {
    const { body } = req;
    return await RecipeService.create(body);
  }

  static async updateRecipe(req: IRecipeRequest) {
    const { body, params } = req;
    const { id } = params;
    return await RecipeService.update(id, body);
  }

  static async deleteRecipe(req: IRecipeRequest) {
    const { params } = req;
    const { id } = params;
    return await RecipeService.delete(id);
  }
}
