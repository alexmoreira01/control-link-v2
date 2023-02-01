import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";

import { CreateLink } from "../createLink/create-link";
import { ListLinks } from "./list-links";

let createLink: CreateLink;
let listLinks: ListLinks;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("List links", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory);
        listLinks = new ListLinks(linksRepositoryInMemory);
    }); 

    it('should be able to list all links', async () => {
        await createLink.execute({
            label: "label a linkOne",
            url: "http://nugzetde.gov/jotdejjuz"
        });

        await createLink.execute({
            label: "label a linkTwo",
            url: "http://kiwseggop.mq/ka"
        });

        const links = await listLinks.execute();

        expect(links).toHaveLength(2);
        expect(links[0].label).toEqual("label a linkOne");
        expect(links[0].url).toEqual("http://nugzetde.gov/jotdejjuz");
        expect(links[1].label).toEqual("label a linkTwo");
        expect(links[1].url).toEqual("http://kiwseggop.mq/ka");

    });
})