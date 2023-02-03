import { ITodo } from "../types/todos.type";
import { Todo } from "../models/Todo";

export class TodoService {
  static async create(data: ITodo) {
    const newTodo = new Todo(data);
    return newTodo.save();
  }

  static async update(_id: string, data: ITodo) {
    return Todo.findOneAndUpdate({ _id }, data, { new: true }).exec();
  }

  static async delete(_id: string) {
    return Todo.deleteOne({ _id });
  }

  static async findAll() {
    return Todo.find();
  }

  static async getAllTodosByUser(
    userId: string,
    status: any,
    search: any
  ): Promise<ITodo[] | null> {
    const filter: { [key: string]: any } = {
      completed: { isDone: true },
      privated: { isPrivate: true },
      public: { isPrivate: false },
    };
    const query = {
      userId,
      ...filter[status],
      ...(search && { title: { $regex: search } }),
    };
    const todos = await Todo.find(query);
    return todos;
  }

  static async findById(_id: string) {
    return Todo.findOne({ _id });
  }
}
