import express from "express";

import { WelcomeController } from "./controllers/welcome/welcome.controller";
import { SearchController } from "./controllers/search/search.controller";
import { GetController } from "./controllers";

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/welcome", WelcomeController);
app.use("/search", SearchController);
app.use("/get", GetController);

app.listen(port, () => {
    console.info(`Listening at http://localhost:${port}/`);
});
