import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';

import { LinkRepository } from "../../repositories/links-repository-interface";

@injectable()
class DeleteLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute(linkId: string): Promise<void> {
        const linkExists = await this.linksRepository.findLinkById(linkId);

        if (!linkExists){
            throw new AppError("Link not exists!");    
        }
        
        await this.linksRepository.deleteLinkById(linkId);
    }
}

export { DeleteLink };