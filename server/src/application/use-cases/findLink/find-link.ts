import { inject, injectable } from 'tsyringe';

import { Links } from '../../entities/typeorm/Links';

import { ILinkRepository } from '../../repositories/ILinksRepository';

@injectable()
class FindLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ){}

    async execute(id: number): Promise<Links> {

        const links = await this.linksRepository.findLinkById(id)

        return links;
    }
}

export { FindLinkService };