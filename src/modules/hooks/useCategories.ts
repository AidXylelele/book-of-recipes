import { useQuery } from "react-query";
import { todoService } from "../services/todo.service";
import { QUERY_KEYS } from "../common/consts/app-keys.const";

export const useCategory = (id: string) => {
  const { isLoading, data: values } = useQuery(
    [QUERY_KEYS.CATEGORY, id],
    () => todoService.getTodos(filter, search),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, values };
};
