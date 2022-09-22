import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from "../../repositories/ILinksRepository";

import { Links } from "../../../../database/entities/Links";

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