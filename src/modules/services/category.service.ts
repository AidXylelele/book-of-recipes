import { IProduct } from "../common/types/product.types";
import { HttpService } from "./http.service";

export class CategoryService extends HttpService {
  getCategories() {
    return this.get(`categories/`);
  }

  getCAtegoryById(id: string) {
    return this.get(`category/${id}`);
  }
}

export const categoryService = new CategoryService();
