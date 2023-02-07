import { Router } from "express";
import { validateBody } from "../../middlewares/body.middleware";
import { validateId } from "../../middlewares/validateId.middleware";
import { checkExistance } from "../../middlewares/check-existance.middleware";
import { responseHandler } from "../../middlewares/response.middleware";
import { RecipeController } from "../../controllers/recipe.contorller";
import { IRecipe } from "../../types/recipe.type";
import { RecipeService } from "../../services/recipe.service";
import { RecipeSchema } from "../../validators/recipe.validators";

const passport = require("passport");

const recipesRouter: Router = Router();

recipesRouter.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  responseHandler(RecipeController.getAllRecipes)
);
recipesRouter.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  validateBody(RecipeSchema),
  responseHandler(RecipeController.createRecipe)
);
recipesRouter.use(
  "/:id",
  validateId,
  passport.authenticate("jwt", { session: false }),
  checkExistance<IRecipe>("id", RecipeService.findById)
);
recipesRouter.get("/:id", responseHandler(RecipeController.getByIdRecipe));
recipesRouter.put(
  "/:id",
  validateBody(RecipeSchema),
  responseHandler(RecipeController.updateRecipe)
);
recipesRouter.delete("/:id", responseHandler(RecipeController.deleteRecipe));

export default recipesRouter;
