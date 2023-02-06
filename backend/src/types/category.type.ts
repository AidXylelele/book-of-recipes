import { Request } from "express";
import { Document } from "mongoose";

export interface ICategory extends Document {
  title: string;
  avatar: string;
}

export interface ICategoryRequest extends Request {
  body: ICategory;
  params: {
    id: string;
  };
}
