import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';
import { PrismaLinkMapper } from './../../../infra/database/prisma/mappers/prisma-link-mapper';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

@injectable()
class FindLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute(linkId: string): Promise<Link> {

        const linkExists = await this.linksRepository.findLinkById(linkId)

        if (!linkExists){
            throw new AppError("Link not existing!");    
        }

        return linkExists;
    }
}

export { FindLink };