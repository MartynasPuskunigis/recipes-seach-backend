import { getDataFromDatabase } from "../../helpers";
import { Recipe } from "../../models/Recipe";

export function searchForRecipesByTitle(searchQuery?: string): Recipe[] {
    if (searchQuery == null || searchQuery === "") {
        return getDataFromDatabase();
    }
    return getDataFromDatabase().filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
}

export function getOnePageOfRecipes(startingRecipe: number, numberOfRecipeToGet: number, searchQuery?: string): Recipe[] {
    if (searchQuery == null || searchQuery === "") {
        return searchForRecipesByTitle().splice(startingRecipe, numberOfRecipeToGet);
    }
    return searchForRecipesByTitle(searchQuery).splice(startingRecipe, numberOfRecipeToGet);
}
