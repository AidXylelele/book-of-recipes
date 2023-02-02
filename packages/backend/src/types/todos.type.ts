import { Document } from 'mongoose';
import { Request } from 'express';

export interface ITodo extends Document {
  title: string;
  data: string;
  isDone: boolean;
  isPrivate: boolean;
}

export interface IRequest extends Request {
  body: ITodo;
  params: {
    id: string;
  };
}
