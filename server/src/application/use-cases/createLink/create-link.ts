import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

interface IRequest {
    label: string;
    url: string;
}

interface IResponse {
    link: Link
}

@injectable()
class CreateLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute({ label, url }:IRequest): Promise<IResponse> {

        const linkAlreadyExists = await this.linksRepository.findLinkByLabel(label);

        if (linkAlreadyExists){
            throw new AppError("Title already exists!");    
        }

        const link = new Link({
            label: label,
            url: url,
            updated_at: null
        });

        await this.linksRepository.createLink(link);

        return {
            link
        } 
        
    }
}

export { CreateLink };