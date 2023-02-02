import { TodoService } from '../services/todo.service';
import { IRequest } from '../types/todos.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getByIdTodo(req: IRequest) {
    const { params } = req;
    const { id } = params;
    const todos = await this.todoService.findById(id);
    return todos;
  }

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  async createTodo(req: IRequest) {
    const { body } = req;
    const createdTodo = await this.todoService.create(body);
    return createdTodo;
  }

  async updateTodo(req: IRequest) {
    const { body, params } = req;
    const { id } = params;
    const updatedTodo = await this.todoService.update(id, body);
    return updatedTodo;
  }

  async deleteTodo(req: IRequest) {
    const { params } = req;
    const { id } = params;
    const result = await this.todoService.delete(id);
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
