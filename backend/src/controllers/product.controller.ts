import { ProductService } from "../services/product.service";
import {
  IProduct,
  IProductFiltersRequest,
  IProductRequest,
} from "../types/product.type";

export class ProductController {
  static async getByIdProduct(req: IProductRequest) {
    const { params } = req;
    const { id } = params;
    return await ProductService.findById(id);
  }

  static async getAllProducts(
    req: IProductFiltersRequest
  ): Promise<IProduct[] | null> {
    const { user } = req;
    const { search, category } = req.query;
    return await ProductService.getAll(user.id, category, search);
  }

  static async createProduct(req: IProductRequest) {
    const { body } = req;
    console.log('Created')
    return await ProductService.create(body);
  }

  static async updateProduct(req: IProductRequest) {
    const { body, params } = req;
    const { id } = params;
    return await ProductService.update(id, body);
  }

  static async deleteProduct(req: IProductRequest) {
    const { params } = req;
    const { id } = params;
    return await ProductService.delete(id);
  }
}
