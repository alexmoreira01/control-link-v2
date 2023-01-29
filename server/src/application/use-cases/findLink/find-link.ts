import { inject, injectable } from 'tsyringe';

import { Links } from '../../entities/typeorm/Links';

import { LinkRepositoryInterface } from '../../repositories/links-repository-interface';

@injectable()
class FindLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepositoryInterface
    ){}

    async execute(id: number): Promise<Links> {

        const links = await this.linksRepository.findLinkById(id)

        return links;
    }
}

export { FindLinkService };