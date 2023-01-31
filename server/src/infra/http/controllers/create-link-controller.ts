import { Request, Response } from "express";

import { container } from "tsyringe";

import { CreateLink  } from "../../../application/use-cases/createLink/create-link";
import { LinkViewModel } from "../view-models/link-view-model";

class CreateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { label, url } = request.body;

        const createLink = container.resolve(CreateLink);

        const { link } = await createLink.execute({
            label, url
        });

        return response.status(201).json(LinkViewModel.toHTTP(link));
    }
}

export { CreateLinkController };