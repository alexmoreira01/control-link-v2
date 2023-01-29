import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateLink  } from "../../../application/use-cases/createLink/create-link";

class CreateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {label, url } = request.body;

        const createLink = container.resolve(CreateLink);

        await createLink.execute({
            label, url
        });

        return response.status(201).send();
    }
}

export { CreateLinkController };