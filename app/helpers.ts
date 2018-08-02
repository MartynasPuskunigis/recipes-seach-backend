import fs from "fs";

import { Recipe } from "./models/Recipe";

const DATABASE_PATH = "app/db/data.json";

export function getDataFromDatabase(): Recipe[] {
  return JSON.parse(fs.readFileSync(DATABASE_PATH, "utf8"));
}
