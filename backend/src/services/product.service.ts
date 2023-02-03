import { filterConfigurator } from "../utils/database-query-configurator.util";
import { Product } from "../models/Product";
import { IProduct } from "../types/product.type";

export class ProductService {
  static async create(data: IProduct) {
    const newTodo = new Product(data);
    return newTodo.save();
  }

  static async update(_id: string, data: IProduct) {
    return Product.findOneAndUpdate({ _id }, data, { new: true }).exec();
  }

  static async delete(_id: string) {
    return Product.deleteOne({ _id });
  }

  static async getAll(
    userId: string,
    category: any,
    search: any
  ): Promise<IProduct[] | null> {
    const query = filterConfigurator(userId, category, search);
    return await Product.find(query);
  }

  static async findById(_id: string) {
    return Product.findOne({ _id });
  }
}
