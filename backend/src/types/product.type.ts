import { Request } from "express";
import { Document } from "mongoose";
import { IUser } from "./user.type";

export interface IProduct extends Document {
  title: string;
  category: string;
  amount: number;
  user_id: string;
}

export interface IRecipeProduct {
  category: string;
  title: string;
  amount: number;
}


export interface IProductRequest extends Request {
  body: IProduct;
  params: {
    id: string;
  };
}

export interface IProductFiltersRequest extends Request {
  user: IUser;
  search: string;
  category: string;
}
