
import { LinkRepositoryInterface } from "../../src/application/repositories/links-repository-interface";
import { Link } from "../../src/application/entities/link";

class LinksRepositoryInMemory implements LinkRepositoryInterface {
    link: Link[] = [];

    createLink(link: Link): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listLinks(): Promise<Link[]> {
        throw new Error("Method not implemented.");
    }
    findLinkById(linkId: string): Promise<Link> {
        throw new Error("Method not implemented.");
    }
    findLinkByLabel(linkLabel: string): Promise<Link> {
        throw new Error("Method not implemented.");
    }
    updateLinkById(link: Link): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteLinkById(linkId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}

