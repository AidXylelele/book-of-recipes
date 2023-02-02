import { ITodo } from '../common/types/todo.types';
import { HttpService } from './http.service';

export class TodoService extends HttpService {
   getTodos(status: string, search: string) {
    return this.get(`todos?status=${status}&search=${search}`);
  }

  getTodoById(id: string) {
    return this.get(`todos/${id}`);
  }

  createTodo(data: ITodo) {
    return this.post('todos', data);
  }

  updateTodo(todo: ITodo) {
    const { title, data, isPrivate, userId, isDone } = todo;
    const updated = { title, data, isDone, userId, isPrivate };
    return this.put(`todos/${todo._id}`, updated);
  }

  deleteTodo(id: string) {
    return this.delete(`todos/${id}`);
  }
}

export const todoService = new TodoService();
