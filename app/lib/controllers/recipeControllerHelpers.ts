import { Recipe } from "../models/Recipe";

export function searchForRecipesByTitle(recipes: Recipe[], searchQuery?: string): Recipe[] {
    if (searchQuery == null || searchQuery === "") {
        return recipes;
    }
    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));
}

export function getOnePageOfRecipes(
    startingRecipe: number,
    numberOfRecipeToGet: number,
    recipes: Recipe[],
    searchQuery?: string
): Recipe[] {
    if (searchQuery == null || searchQuery === "") {
        return searchForRecipesByTitle(recipes).splice(startingRecipe, numberOfRecipeToGet);
    }
    return searchForRecipesByTitle(recipes, searchQuery).splice(startingRecipe, numberOfRecipeToGet);
}
