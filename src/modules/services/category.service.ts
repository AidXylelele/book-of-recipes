import { IProduct } from "../common/types/product.types";
import { HttpService } from "./http.service";

export class CategoryService extends HttpService {
  getCategories() {
    return this.get(`categories/`);
  }

  getCategoryById(id: string) {
    return this.get(`categories/${id}`);
  }
}

export const categoryService = new CategoryService();
