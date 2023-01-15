import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from '../../repositories/ILinksRepository';

import { Links } from '../../entities/typeorm/Links';

@injectable()
class ListLinksService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ){}

    async execute(): Promise<Links[]> {

        const links = await this.linksRepository.listLinks()

        return links;
    }
}

export { ListLinksService };