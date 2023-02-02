import { LinkRepository } from "../../src/application/repositories/links-repository-interface";
import { Link } from "../../src/application/entities/link";

export class LinksRepositoryInMemory implements LinkRepository {
    links: Link[] = [];

    async createLink(link: Link): Promise<void> {
        this.links.push(link);
    }
    
    async listLinks(): Promise<Link[]> {
        return this.links;
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
    async updateLink(link: Link): Promise<void> {
        const linkIndex = this.links.findIndex(
            (item) => item.id === link.id
        );

        if (linkIndex >= 0) {
            this.links[linkIndex] = link;
        }
    }

    async deleteLinkById(linkId: string): Promise<void> {
        const links = this.links.filter((item) => item.id !== linkId);

        this.links = links
    }
}