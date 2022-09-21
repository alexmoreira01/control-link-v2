import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from "../../repositories/ILinksRepository";

interface IRequest{
    label: string;
    url: string;
}

@injectable()
class CreateLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ){}

    async execute({ label, url }:IRequest): Promise<boolean> {
        const linkAlreadyExists = await this.linksRepository.findLinkByLabel(label);

        if(linkAlreadyExists){
            return false;
        }

        await this.linksRepository.createLink(label, url)
        return true;
    }
}

export { CreateLinkService };