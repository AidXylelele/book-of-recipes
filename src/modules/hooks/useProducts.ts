import { useQuery } from "react-query";
import { QUERY_KEYS } from "../common/consts/app-keys.const";
import { productService } from "../services/products.service";

export const useProducts = (category: string, search: string) => {
  const { isLoading, data: values } = useQuery(
    [QUERY_KEYS.PRODUCTS, category, search],
    () => productService.getProducts(category, search),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, values };
};
