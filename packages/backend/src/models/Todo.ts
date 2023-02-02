import { Model, model, Schema } from 'mongoose';
import { ITodo } from '../types/todos.type';

const todoSchema: Schema<ITodo> = new Schema({
  title: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  },
  isPrivate: {
    type: Boolean,
    default: false
  }
});

export const Todo: Model<ITodo> = model('Todo', todoSchema);
