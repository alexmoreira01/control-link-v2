import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";
import { AppError } from "../../../infra/errors/app-error";

import { CreateLink } from "../createLink/create-link";
import { FindLink } from "./find-link";

let createLink: CreateLink;
let findLink: FindLink;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("Find link", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory);
        findLink = new FindLink(linksRepositoryInMemory);
    }); 

    it('should be able to find link by id', async () => {
        const { link } = await createLink.execute({
            label: "label a link find",
            url: "http://zeigodak.gm/pe"
        });

        const findLinkById = await findLink.execute(link.id);

        expect(findLinkById.id).toEqual(link.id);
        expect(findLinkById.label).toEqual("label a link find");
        expect(findLinkById.url).toEqual("http://zeigodak.gm/pe");
    });

    it("should not be able to find link not existing", async () => {
        await expect(
            findLink.execute("5ea08d52-abee-4881-9b23-9d3f266")
        ).rejects.toEqual(new AppError("Link not existing!"));
    })
})