import { IRecipe } from "../common/types/recipe.types";
import { HttpService } from "./http.service";

export class RecipeService extends HttpService {
  getRecipes(category: string, search: string, isPrivate: boolean) {
    return this.get(
      `recipes/all?category=${category}&search=${search}&isPrivate=${isPrivate}`
    );
  }

  getRecipeById(id: string) {
    return this.get(`recipes/${id}`);
  }

  createRecipe(data: IRecipe) {
    return this.post("recipes/new", data);
  }

  updateRecipe(data: IRecipe) {
    const { title, user_id, photoLink, videoLink, description, isPublic } =
      data;
    const updated = {
      title,
      user_id,
      photoLink,
      videoLink,
      description,
      isPublic,
    };
    return this.put(`recipes/${data._id}`, updated);
  }

  deleteRecipe(id: string) {
    return this.delete(`recipes/${id}`);
  }
}

export const recipeService = new RecipeService();
