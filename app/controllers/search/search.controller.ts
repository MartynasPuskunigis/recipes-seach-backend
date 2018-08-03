import { Router, Request, Response } from "express";

import { searchForRecipesByTitle } from "./search.controller.helpers";
import { getDataFromDatabase } from "../../helpers";
import { SearchTypes } from "../../models/SearchTypes";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    const { q, page }: SearchTypes = req.query;
    const startingRecipe = page * 10 - 10;
    const recipesToShow = 10;

    if (q == null || q === "") {
        res.send(getDataFromDatabase().splice(startingRecipe, recipesToShow));
    } else {
        res.send(searchForRecipesByTitle(q, page, startingRecipe, recipesToShow));
    }
});

export const SearchController: Router = router;
