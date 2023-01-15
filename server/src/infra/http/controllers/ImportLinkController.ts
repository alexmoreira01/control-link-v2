import { Request, Response } from "express";

import { container } from "tsyringe";
import { ImportLinkService } from "../../../application/use-cases/importLink/import-link";


class ImportLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const importLinkService = container.resolve(ImportLinkService);

        const { url } = request.body

        const result = await importLinkService.execute(url);

        if(result === false ){
            return response.status(400).json({
                "erro": "Não foi possível importar os links"
            });  
        }

        return response.status(201).send();

    }
}

export { ImportLinkController };