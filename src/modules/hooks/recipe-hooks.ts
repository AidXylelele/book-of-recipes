import { useQuery } from "react-query";
import { QUERY_KEYS } from "../common/consts/app-keys.const";
import { recipeService } from "../services/recipe.service";

export const useRecipe = (id?: string) => {
  const { isLoading, data: value } = useQuery(
    [QUERY_KEYS.RECIPE, id],
    () => recipeService.getRecipeById(id || ""),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      enabled: !!id,
    }
  );
  return { isLoading, value };
};

export const useRecipes = (
  category: string,
  search: string,
  isPrivate: boolean
) => {
  const { isLoading, data: values } = useQuery(
    [QUERY_KEYS.RECIPES, category, search, isPrivate],
    () => recipeService.getRecipes(category, search, isPrivate),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, values };
};
