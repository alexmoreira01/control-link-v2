import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from '../../repositories/ILinksRepository';

interface IRequest {
    id: number;
    label: string;
    url: string;
}

@injectable()
class UpdateLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ){}

    async execute({id, label, url}: IRequest): Promise<boolean> {
        const linkAlreadyExists = await this.linksRepository.findLinkById(id);

        if(linkAlreadyExists){
            await this.linksRepository.updateLinkById(id, label, url);
            return true;
        }
    
        return false;
    }
}

export { UpdateLinkService };