import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

interface IRequest {
    linkId: string;
    label: string;
    url: string;
}

interface IResponse {
    link: Link
}

@injectable()
class UpdateLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ) { }

    async execute({ linkId, label, url }: IRequest): Promise<IResponse> {
        const linkAlreadyExists = await this.linksRepository.findLinkById(linkId);

        if (!linkAlreadyExists) {
            throw new AppError("Link not exists!");
        }

        let linkUpdate = linkAlreadyExists;

        linkUpdate.label = label;
        linkUpdate.url = url;
        linkUpdate.updatedAt();

        await this.linksRepository.updateLink(linkUpdate);

        return {
            link: linkUpdate
        }
    }
}

export { UpdateLink };