import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from "../../repositories/ILinksRepository";

interface IRequest{
    id: number;
}

@injectable()
class DeleteLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ){}

    async execute({ id }:IRequest): Promise<boolean> {
        const linkExists = await this.linksRepository.findLinkById(id);

        if(linkExists){
            await this.linksRepository.deleteLinkById(id);
            return true;
        }else {
            return false;
        }
    }
}

export { DeleteLinkService };