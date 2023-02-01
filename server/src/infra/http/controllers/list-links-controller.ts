import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListLinks } from "../../../application/use-cases/listLinks/list-links";
import { LinkViewModel } from "../view-models/link-view-model";

class ListLinksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLinks = container.resolve(ListLinks);

        const links = await listLinks.execute();

        return response.json(links.map(LinkViewModel.toHTTP));
    }
}

export { ListLinksController };