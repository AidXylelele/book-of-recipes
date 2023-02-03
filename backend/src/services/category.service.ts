import { Category } from "../models/Category";
import { ICategory } from "../types/category.type";

export class CategoryService {
  static async getAll(): Promise<ICategory[] | null> {
    return await Category.find();
  }

  static async findById(_id: string) {
    return Category.findOne({ _id });
  }
}
