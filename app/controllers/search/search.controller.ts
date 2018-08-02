import { Router, Request, Response } from "express";

import { getDataFromDatabase } from "../../helpers";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(getDataFromDatabase()[0].title);
});

router.get("/rId/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(searchForRecipesById(id));
});

router.get("/title/:searchQuery", (req: Request, res: Response) => {
  const { searchQuery } = req.params;
  res.send(searchForRecipesByTitle(searchQuery));
});

router.get("/title", (req: Request, res: Response) => {
  res.send(getDataFromDatabase().splice(0, 10));
});

function searchForRecipesByTitle(searchQuery: string): string {
  const filteredRecipesForSearch = getDataFromDatabase().filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery)
  );
  return JSON.stringify(filteredRecipesForSearch);
}

function searchForRecipesById(id: string): string {
  const recipeFoundById = getDataFromDatabase().filter(recipe => recipe.recipe_id === id);
  return JSON.stringify(recipeFoundById);
}

export const SearchController: Router = router;
