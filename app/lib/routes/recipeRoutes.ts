import { Request, Response } from "express";

import { RecipeController } from "../controllers/recipeController";

export class Routes {
    public recipeController: RecipeController = new RecipeController();

    public routes(app): void {
        app.route("/recipe").get(this.recipeController.getRecipes);
        app.route("/recipe").post(this.recipeController.addNewRecipe);
        app.route("/recipe/:recipeId").get(this.recipeController.getRecipeWithID);
        app.route("/recipe/:recipeId").put(this.recipeController.updateRecipe);
        app.route("/recipe/:recipeId").delete(this.recipeController.deleteRecipe);
        app.route("/recipe/:recipeId")
            .get(this.recipeController.getRecipeWithID)
            .put(this.recipeController.updateRecipe)
            .delete(this.recipeController.deleteRecipe);

        app.route("/").get((req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successful!!!!"
            });
        });

        app.route("/recipe")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request successful!!!!"
                });
            })
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: "POST request successful!!!!"
                });
            });

        app.route("/recipe/:recipeId")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request successful!!!!"
                });
            })
            .put((req: Request, res: Response) => {
                // Update a recipe
                res.status(200).send({
                    message: "PUT request successful!!!!"
                });
            })
            .delete((req: Request, res: Response) => {
                // Delete a recipe
                res.status(200).send({
                    message: "DELETE request successful!!!!"
                });
            });
    }
}
