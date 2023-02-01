import { Request, Response } from "express";

import { container } from "tsyringe";
import { FindLink } from "../../../application/use-cases/findLink/find-link";
import { LinkViewModel } from "../view-models/link-view-model";

class FindLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const linkId = request.params.id;

        const findLink = container.resolve(FindLink);

        const link = await findLink.execute(linkId);

        return response.json(LinkViewModel.toHTTP(link));
    }
}

export { FindLinkController };