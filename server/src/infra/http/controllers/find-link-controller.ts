import { Request, Response } from "express";

import { container } from "tsyringe";
import { FindLinkService } from "../../../application/use-cases/findLink/find-link";
import { LinkViewModel } from "../view-models/link-view-model";


class FindLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const linkId = request.params.id;

        const findLinkService = container.resolve(FindLinkService);

        const link = await findLinkService.execute(linkId);

        // console.log(link)

        // return response.json(link);
        return response.json(LinkViewModel.toHTTP(link));

    }
}

export { FindLinkController };