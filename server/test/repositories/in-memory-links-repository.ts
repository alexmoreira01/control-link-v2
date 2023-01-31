
import { LinkRepository } from "../../src/application/repositories/links-repository-interface";
import { Link } from "../../src/application/entities/link";

export class LinksRepositoryInMemory implements LinkRepository {
    links: Link[] = [];

    async createLink(link: Link): Promise<void> {
        this.links.push(link);
    }
    
    listLinks(): Promise<Link[]> {
        throw new Error("Method not implemented.");
    }
    async findLinkById(linkId: string): Promise<Link> {
        const link = this.links.find(
            (item) => item.id === linkId,
        );

        if (!link) {
            return null;
        }

        return link;
    }
    async findLinkByLabel(label: string): Promise<Link> {
        const link = this.links.find(
            (item) => item.label === label,
        );

        if (!link) {
            return null;
        }

        return link
    }
    updateLink(link: Link): Promise<void> {
        const linkIndex = this.links.findIndex(
            (item) => item.id === link.id
        );

        if (linkIndex >= 0) {
            this.links[linkIndex] = link;
        }

        return
    }
    deleteLinkById(linkId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    

    

}

