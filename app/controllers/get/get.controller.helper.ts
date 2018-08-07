import { getDataFromDatabase } from "../../helpers";

export function searchForRecipesById(id: string): string {
    const recipeFoundById = getDataFromDatabase().filter(recipe => recipe.recipe_id === id);
    return JSON.stringify(recipeFoundById);
}
