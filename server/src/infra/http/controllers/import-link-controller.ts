import { Request, Response } from "express";

import { container } from "tsyringe";
import { ImportLink } from "../../../application/use-cases/importLink/import-link";


class ImportLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { url } = request.body
        
        const importLink = container.resolve(ImportLink);

        await importLink.execute(url);

        return response.status(201).send();
    }
}

export { ImportLinkController };