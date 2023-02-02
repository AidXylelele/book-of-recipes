import { TodoService } from '../services/todo.service';
import { IFiltersRequest, IRequest, ITodo } from '../types/todos.type';

export class TodoController {
  static async getByIdTodo(req: IRequest) {
    const { params } = req;
    const { id } = params;
    const todos = await TodoService.findById(id);
    return todos;
  }

 static async getAllTodo(req: IFiltersRequest): Promise<ITodo[] | null> {
    const { user } = req;
    const { search, status } = req.query;
    const todos = await TodoService.getAllTodosByUser(user.id, status, search);
    return todos;
  }

  static async createTodo(req: IRequest) {
    const { body } = req;
    const createdTodo = await TodoService.create(body);
    return createdTodo;
  }

  static async updateTodo(req: IRequest) {
    const { body, params } = req;
    const { id } = params;
    const updatedTodo = await TodoService.update(id, body);
    return updatedTodo;
  }

  static async deleteTodo(req: IRequest) {
    const { params } = req;
    const { id } = params;
    const result = await TodoService.delete(id);
    return result;
  }
}
