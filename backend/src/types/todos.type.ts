import { Document } from 'mongoose';
import { Request } from 'express';
import { IUser } from './user.type';

export interface ITodo extends Document {
  title: string;
  data: string;
  isDone: boolean;
  isPrivate: boolean;
  userId: string;
}

export interface IRequest extends Request {
  body: ITodo;
  params: {
    id: string;
  };
}

export interface ITodoRequest extends Request {
  user: IUser;
  body: ITodo;
}

export interface IFiltersRequest extends Request {
  user: IUser;
  search: string;
  status: string;
}
