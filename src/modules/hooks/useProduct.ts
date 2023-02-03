import { useQuery } from "react-query";
import { QUERY_KEYS } from "../common/consts/app-keys.const";
import { productService } from "../services/products.service";

export const useProduct = (id?: string) => {
  const { isLoading, data: value } = useQuery(
    [QUERY_KEYS.PRODUCT, id],
    () => productService.getProductById(id || ""),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      enabled: !!id,
    }
  );
  return { isLoading, value };
};
