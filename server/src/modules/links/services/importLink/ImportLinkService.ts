import * as fetch from 'node-fetch';
import * as cheerio from "cheerio";

import { inject, injectable } from 'tsyringe';

import { ILinkRepository } from "../../repositories/ILinksRepository";

@injectable()
class ImportLinkService {
    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinkRepository
    ) { }

    async execute(url: string): Promise<boolean> {
        const seenUrls = {};
        const items = [];

        if (seenUrls[url]) return;
        console.log("crawling", url);
        seenUrls[url] = true;

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        $('.blog-article-card-title').each((i, element) => {
            const label = $(element).children('a').text();
            const link = this.getUrl($(element).children('a').attr('href'))

            items.push({
                label,
                link
            });
        });

        for (let i = 0; i<items.length; i++){
            const linkAlreadyExists = await this.linksRepository.findLinkByLabel(items[i].label);

            if(linkAlreadyExists){
                await this.linksRepository.updateLinkById(linkAlreadyExists.id, items[i].label, items[i].link);
            }else {
                await this.linksRepository.createLink(items[i].label, items[i].link)
            }
        }

        return true;
    }

    private getUrl = (link: string) => {
        if (link.includes("https")) {
            return link;

        } else if (link.startsWith("/")) {
            return `https://devgo.com.br${link}`;

        } else {
            return `https://devgo.com.br/${link}`;
        }
    }
}

export { ImportLinkService };