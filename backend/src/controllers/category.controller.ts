import { ICategory, ICategoryRequest } from "../types/category.type";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  static async getByIdCategory(req: ICategoryRequest) {
    const { params } = req;
    const { id } = params;
    const todos = await CategoryService.findById(id);
    return todos;
  }

  static async getAllCategories(): Promise<ICategory[] | null> {
    return await CategoryService.getAll();
  }
}
