import { getDataFromDatabase } from "../../helpers";

export function searchForRecipesByTitle(searchQuery: string): string {
    const filteredRecipesForSearch = getDataFromDatabase().filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
    return JSON.stringify(filteredRecipesForSearch);
}
