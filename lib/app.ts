import * as express from "express";
import { Routes } from "routes/caseRouter";
import * as WebSocket from 'ws';

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
    }

    private config(): void{
        // serving static files 
        this.app.use(express.static('public'));
    }

}

export default new App().app;