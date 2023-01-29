import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

interface IRequest{
    label: string;
    url: string;
}

@injectable()
class CreateLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute({ label, url }:IRequest): Promise<void> {

        const linkAlreadyExists = await this.linksRepository.findLinkByLabel(label);

        if (linkAlreadyExists){
            throw new AppError("Title already exists!");    
        }

        const newLink = new Link({
            label: label,
            url: url,
            updated_at: null
        });

        await this.linksRepository.createLink(newLink);
    }
}

export { CreateLink };