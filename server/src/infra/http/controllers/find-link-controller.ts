import { Request, Response } from "express";

import { container } from "tsyringe";
import { FindLinkService } from "../../../application/use-cases/findLink/find-link";


class FindLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const linkId = request.params.id;

        const findLinkService = container.resolve(FindLinkService);

        const link = await findLinkService.execute(linkId);

        return response.json(link);
    }
}

export { FindLinkController };