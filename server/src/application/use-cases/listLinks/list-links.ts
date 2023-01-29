import { inject, injectable } from 'tsyringe';

import { Link } from '../../entities/link';
import { LinkRepository } from '../../repositories/links-repository-interface';

@injectable()
class ListLinksService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ){}

    async execute(): Promise<Link[]> {

        const links = await this.linksRepository.listLinks()

        return links;
    }
}

export { ListLinksService };