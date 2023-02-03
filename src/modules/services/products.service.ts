import { IProduct } from "../common/types/product.types";
import { HttpService } from "./http.service";

export class ProductService extends HttpService {
  getProducts(category: string, search: string) {
    return this.get(`products/all?category=${category}&search=${search}`);
  }

  getProductById(id: string) {
    return this.get(`products/${id}`);
  }

  createProduct(data: IProduct) {
    return this.post("products/new", data);
  }

  updateProduct(data: IProduct) {
    const { title, category, user_id, amount } = data;
    const updated = { title, category, user_id, amount };
    return this.put(`products/${data._id}`, updated);
  }

  deleteProduct(id: string) {
    return this.delete(`products/${id}`);
  }
}

export const productService = new ProductService();
