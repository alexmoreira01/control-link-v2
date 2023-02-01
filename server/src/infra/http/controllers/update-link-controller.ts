import { Request, Response } from "express";

import { container } from "tsyringe";
import { UpdateLink } from "../../../application/use-cases/updateLink/update-link";
import { LinkViewModel } from "../view-models/link-view-model";


class UpdateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const linkId = request.params.id;
        const {label, url} = request.body;
        
        const updateLink = container.resolve(UpdateLink);

        const { link } = await updateLink.execute({ 
            linkId, 
            label, 
            url
        });

        return response.status(200).json(LinkViewModel.toHTTP(link));
    }
}

export { UpdateLinkController };