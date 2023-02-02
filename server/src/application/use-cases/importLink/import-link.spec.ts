import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";
import { CreateLink } from "../createLink/create-link";
import { ImportLink } from "./import-link";

let createLink: CreateLink;
let importLink: ImportLink;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("Import links", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory);
        importLink = new ImportLink(linksRepositoryInMemory);
    }); 

    it('should be able to import new links', async () => {
        await importLink.execute("https://devgo.com.br/");

        expect(linksRepositoryInMemory.links).toHaveLength(12);
    });

    it('should be able to update a link exists', async () => {
        await createLink.execute({
            label: "Você já usa o NestJS?",
            url: "https://devgo.com.br/voce-ja-usa-o-nestjs"
        });

        await importLink.execute("https://devgo.com.br/");
        
        expect(linksRepositoryInMemory.links).toHaveLength(12);
    });
})