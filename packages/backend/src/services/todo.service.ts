import { ITodo } from '../types/todos.type';
import { Todo } from '../models/Todo';

export class TodoService {
  async create(data: ITodo) {
    const newTodo = new Todo(data);
    return newTodo.save();
  }

  async update(_id: string, data: ITodo) {
    return Todo.findOneAndUpdate({ _id }, data, { new: true }).exec();
  }

  async delete(_id: string) {
    return Todo.deleteOne({ _id });
  }

  async findAll() {
    return Todo.find();
  }

  async findById(_id: string) {
    return Todo.findOne({ _id });
  }
}

export const todoService = new TodoService();
