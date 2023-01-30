import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListLinksService } from "../../../application/use-cases/listLinks/list-links";
import { LinkViewModel } from "../view-models/link-view-model";

class ListLinksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLinksService = container.resolve(ListLinksService);

        const links = await listLinksService.execute();

        return response.json(links.map(LinkViewModel.toHTTP));
    }
}

export { ListLinksController };