import { Request, Response } from "express";

import { container } from "tsyringe";

import { DeleteLinkService } from "../../../application/use-cases/deleteLink/delete-link";

class DeleteLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteLinkService = container.resolve(DeleteLinkService);

        const linkId = request.params.id;

        const id = Number(linkId);

        const result = await deleteLinkService.execute({id});

        if(result === false ){
            return response.status(400).json({
                "erro": "Link não existente!"
            });  
        }

        return response.status(200).send(); 

    }
}

export { DeleteLinkController };