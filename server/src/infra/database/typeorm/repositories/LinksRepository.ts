import { AppDataSource } from "..";

import { ILinkRepository } from "../../../../application/repositories/ILinksRepository";

import { Repository } from "typeorm";
import { Links } from "../../../../application/entities/typeorm/Links";

class LinksRepository implements ILinkRepository {
    private repository: Repository<Links>

    constructor() {
        this.repository = AppDataSource.getRepository(Links)
    }

    async createLink(label: string, url: string): Promise<void> {
        const createLink = this.repository.create({
            label,
            url
        });

        await this.repository.save(createLink);
    }

    async listLinks(): Promise<Links[]> {

        const allLinks = await this.repository
            .createQueryBuilder()
            .orderBy("id", "DESC")
            .getMany()

        return allLinks;
    }

    async findLinkById(id: number): Promise<Links> {
        const linkExists = await this.repository.findOneBy({
            id,
        });

        return linkExists;
    }

    async findLinkByLabel(label: string): Promise<Links> {
        const link = await this.repository.findOneBy({ label: label });

        return link;
    }


    async updateLinkById(id: number, label: string, url: string): Promise<void> {
        const update = await this.repository
            .createQueryBuilder()
            .update()
            .set({
                label: label,
                url: url
            })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async deleteLinkById(id: number): Promise<void> {
        const linkRemove = await this.repository.findOneBy({
            id,
        });

        await this.repository.remove(linkRemove);
    }

}

export { LinksRepository }