import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateLinkService  } from "./CreateLinkService";

class CreateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createLinkService = container.resolve(CreateLinkService);

        const {label, url } = request.body;

        const result = await createLinkService.execute({
            label, url
        });

        if(result === false ){
            return response.status(400).json({
                "erro": "Título ja existente!"
            });  
        }

        return response.status(201).send();

    }
}

export { CreateLinkController };