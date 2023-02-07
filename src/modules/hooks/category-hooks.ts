import { useQuery } from "react-query";
import { QUERY_KEYS } from "../common/consts/app-keys.const";
import { categoryService } from "../services/category.service";

export const useCategory = (id: string) => {
  const { isLoading, data: value } = useQuery(
    [QUERY_KEYS.CATEGORY, id],
    () => categoryService.getCategoryById(id),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, value };
};

export const useCategories = () => {
  const { isLoading, data: values } = useQuery(
    [QUERY_KEYS.CATEGORIES],
    () => categoryService.getCategories(),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, values };
};
