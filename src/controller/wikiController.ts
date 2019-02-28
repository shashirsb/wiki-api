import { Request, Response } from "express";
import * as express from "express";
import DataService from "../shared/services/data.services";
import { MainModel } from "../model/main.model";



export default class WikiController {

    async findWikiByCityName(req: Request, res: Response) {
        try {
            const vlModel = new MainModel();
            vlModel.baseUrl = "https://en.wikipedia.org";
            vlModel.path = vlModel.baseUrl + "/w/api.php?action=query&prop=extracts|info|pageimages|coordinates|pageprops&exintro&explaintext&redirects&format=json&inprop=url&";
            const params = req.body;
            const queryString = "titles=" + params.place;
            const url = vlModel.path + queryString;
            // Call external api
            let externalResponse = await DataService.get(url).then(
                (data: any) => {
                    return data;
                }
            );
            externalResponse = JSON.parse(externalResponse);
            res.json({ status: true, data: externalResponse });
        } catch (error) {
            res.json({ status: false, error });
        }
    }

}