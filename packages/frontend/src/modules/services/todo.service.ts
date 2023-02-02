import { ITodo } from '../common/types/todo.types';
import { HttpService } from './http.service';

export class TodoService extends HttpService {
  getTodoAll() {
    return this.get('todos');
  }

  getTodoById(id: string) {
    return this.get(`todos/${id}`);
  }

  createTodo(data: ITodo) {
    return this.post('todos', data);
  }

  updateTodo(todo: ITodo) {
    const { title, data, isPrivate, isDone } = todo;
    const updated = { title, data, isDone, isPrivate };
    return this.put(`todos/${todo._id}`, updated);
  }

  deleteTodo(id: string) {
    return this.delete(`todos/${id}`);
  }
}

export const todoService = new TodoService();
