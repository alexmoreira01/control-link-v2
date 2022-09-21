import { Request, Response } from "express";

import { container } from "tsyringe";

import { UpdateLinkService } from "./UpdateLinkService";

class UpdateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateLinkService = container.resolve(UpdateLinkService);

        const linkId = request.params.id;
        const {label, url} = request.body;

        const id = Number(linkId);

        const result = await updateLinkService.execute({ id, label, url});

        if (result === false) {
            return response.status(400).json({
                "erro": "Não foi possível atualizar, link não existente!"
            });
        }

        return response.status(201).json();
    }
}

export { UpdateLinkController };