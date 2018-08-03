import { getDataFromDatabase } from "../../helpers";

export function searchForRecipesByTitle(searchQuery: string, page: number, startingRecipe: number, recipesToShow: number): string {
    const filteredRecipesForSearch = getDataFromDatabase().filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
    return JSON.stringify(filteredRecipesForSearch.splice(startingRecipe, recipesToShow));
}
