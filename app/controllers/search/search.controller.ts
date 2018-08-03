import { Router, Request, Response } from "express";

import { searchForRecipesByTitle, getOnePageOfRecipes } from "./search.controller.helpers";
import { SearchTypes } from "../../models/SearchTypes";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    const { q, page }: SearchTypes = req.query;
    const startingRecipe = page * 10 - 10;
    const recipesToShow = 10;

    if (page == null) {
        res.send(searchForRecipesByTitle());
    } else {
        res.send(getOnePageOfRecipes(startingRecipe, recipesToShow, q));
    }
});

export const SearchController: Router = router;
