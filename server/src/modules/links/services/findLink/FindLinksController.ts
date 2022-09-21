import { Request, Response } from "express";

import { container } from "tsyringe";

import { FindLinksService  } from "./FindLinksService";

class FindLinksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findLinksService = container.resolve(FindLinksService);

        const links = await findLinksService.execute();

        return response.json(links);

    }
}

export { FindLinksController };