import { Request, Response } from "express";

import { container } from "tsyringe";

import { DeleteLink } from "../../../application/use-cases/deleteLink/delete-link";

class DeleteLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const linkId = request.params.id;
        
        const deleteLink = container.resolve(DeleteLink);

        await deleteLink.execute(linkId);

        return response.status(204).send(); 
    }
}

export { DeleteLinkController };