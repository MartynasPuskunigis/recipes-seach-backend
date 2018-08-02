import { Router, Request, Response } from "express";

import { data } from "../../db/data";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(data[0].title);
});

router.get("/:searchQuery", (req: Request, res: Response) => {
  let { searchQuery } = req.params;
  res.send(searchForRecipesByTitle(searchQuery));
});

function searchForRecipesByTitle(searchQuery: string): string {
  const filteredRecipesForSearch = data.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery)
  );
  console.log(filteredRecipesForSearch);
  return JSON.stringify(filteredRecipesForSearch);
}

export const SearchController: Router = router;
