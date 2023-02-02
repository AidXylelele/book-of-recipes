const  useQuery = require('react-query') 
import { todoService } from '../services/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

export const useTodos = () => {
  const { isLoading, data: values } = useQuery(QUERY_KEYS.TODOS, () => todoService.getTodoAll(), {
    onError: (error: any) => {
      alert(error.message);
    },
  });
  return { isLoading, values };
};
