import { Router, Request, Response } from "express";

import { searchForRecipesByTitle } from "./search.controller.helpers";
import { getDataFromDatabase } from "../../helpers";
import { SearchTypes } from "../../models/SearchTypes";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    const { q }: SearchTypes = req.query;

    if (q == null || q === "") {
        res.send(getDataFromDatabase().splice(0, 10));
    }

    res.send(searchForRecipesByTitle(q));
});

export const SearchController: Router = router;
