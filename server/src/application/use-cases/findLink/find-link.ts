import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../infra/errors/app-error';
import { PrismaLinkMapper } from './../../../infra/database/prisma/mappers/prisma-link-mapper';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

@injectable()
class FindLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute(linkId: string): Promise<Link> {

        const link = await this.linksRepository.findLinkById(linkId)

        if (!link){
            throw new AppError("Link not exists!");    
        }

        return link;
    }
}

export { FindLinkService };