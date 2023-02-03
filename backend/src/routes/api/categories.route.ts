import { Router } from "express";
import { responseHandler } from "../../middlewares/response.middleware";
import { CategoryController } from "../../controllers/category.controller";

const passport = require("passport");

const categoriesRouter: Router = Router();

categoriesRouter.get(
  "",
  passport.authenticate("jwt", { session: false }),
  responseHandler(CategoryController.getAllCategories)
);
categoriesRouter.get(
  "/:id",
  responseHandler(CategoryController.getByIdCategory)
);

export default categoriesRouter;
