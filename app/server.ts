import express from "express";

import { WelcomeController } from "./controllers/welcome/welcome.controller";
import { SearchController } from "./controllers/search/search.controller";
import { Recipe } from "./models/Recipe";

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/welcome", WelcomeController);

app.use("/search", SearchController);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:${port}/`);
});
