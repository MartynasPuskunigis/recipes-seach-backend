import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { Routes } from "./routes/crmRoutes";
import { MONGO_URL } from "../shared/mongo-url";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = MONGO_URL;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config(): void {
        // Support application/json type post data.
        this.app.use(bodyParser.json());
        // Support application/x-www-form-urlencoded post data.
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
