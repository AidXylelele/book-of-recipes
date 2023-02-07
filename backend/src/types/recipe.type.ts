import { Request } from "express";
import { Document } from "mongoose";
import { IRecipeProduct } from "./product.type";
import { IUser } from "./user.type";

export interface IRecipe extends Document {
  title: string;
  products: Array<IRecipeProduct>;
  videoLink: string;
  photoLink: string;
  description: string;
  user_id: string;
  isPublic: boolean;
}

export interface IRecipeRequest extends Request {
  body: IRecipe;
  params: {
    id: string;
  };
}

export interface IRecipeFiltersRequest extends Request {
  user: IUser;
  search: string;
  status: string;
  isPrivate: boolean;
}
