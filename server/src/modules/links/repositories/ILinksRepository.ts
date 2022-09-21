import { Links } from "../../../database/entities/Links";

interface ILinkRepository{
    createLink(label: string, url: string): Promise<void>;

    findLinks() :Promise<Links>;

    findLinkById(id: number): Promise<Links>;

    findLinkByLabel(label: string): Promise<Links>;

    updateLinkById(id: number, label: string, url: string): Promise<void>;

    deleteLinkById(id: number): Promise<void>;

}

export { ILinkRepository };