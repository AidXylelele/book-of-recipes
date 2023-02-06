import { Request } from "express";
import { Document } from "mongoose";

export interface Product {
  category: string,
  name: string;
  amount: number;
}

export interface IRecipe extends Document {
  title: string;
  products: Array<Product>;
  videoLink: string;
  photoLink: string;
  description: string;
}

export interface IRecipeRequest extends Request {
  body: IRecipe;
  params: {
    id: string;
  };
}