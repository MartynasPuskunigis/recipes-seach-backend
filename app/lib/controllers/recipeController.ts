import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { RecipeSchema } from "../models/recipeModel";
import { SearchTypes } from "../models/searchModel";
import { Recipe } from "../models/Recipe";
import { searchForRecipesByTitle, getOnePageOfRecipes } from "./recipeControllerHelpers";

export const RecipeModel = mongoose.model("allrecipes", RecipeSchema);

export class RecipeController {
    public addNewRecipe(req: Request, res: Response): void {
        const newRecipe = new RecipeModel(req.body);
        newRecipe.save((err, recipe) => {
            if (err) {
                res.send(err);
            }
            res.json(recipe);
        });
    }

    public getRecipes(req: Request, res: Response): void {
        const { q, page }: SearchTypes = req.query;
        const startingRecipe = page * 10 - 10;
        const recipesToShow = 10;

        if (page == null) {
            RecipeModel.find({}, (err, recipes: Recipe[]) => {
                if (err) {
                    res.send(err);
                }
                res.json(searchForRecipesByTitle(recipes, q));
            });
        } else {
            RecipeModel.find({}, (err, recipes: Recipe[]) => {
                if (err) {
                    res.send(err);
                }
                if (q == null) {
                    res.json(getOnePageOfRecipes(startingRecipe, recipesToShow, recipes));
                } else {
                    res.json(getOnePageOfRecipes(startingRecipe, recipesToShow, recipes, q));
                }
            });
        }
    }

    public getRecipeWithID(req: Request, res: Response): void {
        RecipeModel.findById(req.params.recipeId, (err, recipe) => {
            if (err) {
                res.send(err);
            }
            res.json(recipe);
        });
    }

    public updateRecipe(req: Request, res: Response): void {
        RecipeModel.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true }, (err, recipe) => {
            if (err) {
                res.send(err);
            }
            res.json(recipe);
        });
    }

    public deleteRecipe(req: Request, res: Response): void {
        RecipeModel.remove({ _id: req.params.recipeId }, (err, recipe) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted contact!" });
        });
    }
}
