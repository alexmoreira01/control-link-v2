import * as fetch from 'node-fetch';
import * as cheerio from "cheerio";

import { inject, injectable } from 'tsyringe';

import { LinkRepository } from '../../repositories/links-repository-interface';
import { Link } from '../../entities/link';

@injectable()
class ImportLink {
    constructor(
        @inject("LinksRepository")
        private linksRepository: LinkRepository
    ) { }

    async execute(url: string): Promise<void> {
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

        for (let i = 0; i < items.length; i++) {
            const linkAlreadyExists = await this.linksRepository.findLinkByLabel(items[i].label);

            if (linkAlreadyExists) {

                let linkUpdate = linkAlreadyExists;

                linkUpdate.label = items[i].label;
                linkUpdate.url = items[i].link;
                linkUpdate.updatedAt();

                await this.linksRepository.updateLink(linkUpdate);
            } else {

                const newLink = new Link({
                    label: items[i].label,
                    url: items[i].link,
                    updated_at: null
                });

                await this.linksRepository.createLink(newLink);
            }
        }
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

export { ImportLink };