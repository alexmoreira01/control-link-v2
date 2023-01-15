import { Request, Response } from "express";

import { container } from "tsyringe";
import { FindLinkService } from "../../../application/use-cases/findLink/find-link";


class FindLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findLinkService = container.resolve(FindLinkService);

        const linkId = request.params.id;

        const id = Number(linkId);

        const links = await findLinkService.execute(id);

        return response.json(links);

    }
}

export { FindLinkController };