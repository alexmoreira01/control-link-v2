import { Link } from "../entities/link";

interface LinkRepositoryInterface{
    createLink(link: Link): Promise<void>;

    listLinks() :Promise<Link[]>;

    findLinkById(linkId: string): Promise<Link | null>;

    findLinkByLabel(label: string): Promise<Link | null>;

    updateLinkById(link: Link): Promise<void>;

    deleteLinkById(linkId: string): Promise<void>;

}

export { LinkRepositoryInterface };