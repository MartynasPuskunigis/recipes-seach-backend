import { Router, Request, Response } from "express";

import { searchForRecipesById } from "./get.controller.helper";
import { GetTypes } from "../../models/GetTypes";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    const { rId }: GetTypes = req.query;
    res.send(searchForRecipesById(rId));
});

export const GetController: Router = router;
