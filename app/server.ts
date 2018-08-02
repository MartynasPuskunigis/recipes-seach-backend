import express from 'express';

import {WelcomeController} from './controllers/welcome/welcome.controller';
import {SearchController} from './controllers/search/search.controller';

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use('/welcome', WelcomeController);

app.use('/recipes', SearchController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
