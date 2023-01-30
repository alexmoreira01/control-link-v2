import { Link } from "../entities/link";

interface LinkRepository {
    createLink(link: Link): Promise<void>;
    listLinks() :Promise<Link[]>;
    findLinkById(linkId: string): Promise<Link | null>;
    findLinkByLabel(label: string): Promise<Link | null>;
    updateLink(link: Link): Promise<void>;
    deleteLinkById(linkId: string): Promise<void>;
}

export { LinkRepository };