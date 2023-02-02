const  useQuery = require('react-query') 
import { todoService } from '../services/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

export const useTodo = (id?: string) => {
  const { isLoading, data: value } = useQuery(
    [QUERY_KEYS.TODO, id],
    () => todoService.getTodoById(id || ''),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      enabled: !!id
    }
  );
  return { isLoading, value };
};
