import { Application } from "express";
import todosRouter from "./api/todos.route";
import userRouter from "./api/users.route";
import categoriesRouter from "./api/categories.route";
import productsRouter from "./api/products.route";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Running");
    });
    this.app.use("/api/todos", todosRouter);
    this.app.use("/api/user", userRouter);
    this.app.use("/api/categories", categoriesRouter);
    this.app.use("/api/products", productsRouter);
  }
}

export default AppRouter;
