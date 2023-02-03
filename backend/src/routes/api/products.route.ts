import { Router } from "express";
import { validateBody } from "../../middlewares/body.middleware";
import { validateId } from "../../middlewares/validateId.middleware";
import { checkExistance } from "../../middlewares/check-existance.middleware";
import { responseHandler } from "../../middlewares/response.middleware";
import { ProductController } from "../../controllers/product.controller";
import { IProduct } from "../../types/product.type";
import { ProductService } from "../../services/product.service";
import { ProductSchema } from "../../validators/product.validators";

const passport = require("passport");

const productsRouter: Router = Router();

productsRouter.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  responseHandler(ProductController.getAllProducts)
);
productsRouter.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  validateBody(ProductSchema),
  responseHandler(ProductController.createProduct)
);
productsRouter.use(
  "/:id",
  validateId,
  passport.authenticate("jwt", { session: false }),
  checkExistance<IProduct>("id", ProductService.findById)
);
productsRouter.get("/:id", responseHandler(ProductController.getByIdTodo));
productsRouter.put(
  "/:id",
  validateBody(ProductSchema),
  responseHandler(ProductController.updateProduct)
);
productsRouter.delete("/:id", responseHandler(ProductController.deleteProduct));

export default productsRouter;
