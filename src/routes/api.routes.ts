import * as express from "express";
import WikiController from "./../controller/wikiController";


class ApiRoutes {
    public router: express.Router;
    public WikiController: WikiController;

    constructor() {
        this.router = express.Router();
        this.WikiController = new WikiController();
    this.init();

    }

    init() {
        const prefix = "/api/";

        // WikiPedia Controller

        this.router.post(prefix + "wiki/findByCityName", this.WikiController.findWikiByCityName);

    }

}

export default new ApiRoutes();