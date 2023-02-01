import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";
import { AppError } from "../../../infra/errors/app-error";
import { CreateLink } from "../createLink/create-link";
import { UpdateLink } from "./update-link";

let createLink: CreateLink;
let updateLink: UpdateLink;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("Update link", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory);
        updateLink = new UpdateLink(linksRepositoryInMemory);
    }); 

    it('should be able to update a link', async () => {
        const { link } = await createLink.execute({
            label: "label a link",
            url: "url a link"
        });

        await updateLink.execute({
            linkId: link.id,
            label: "label update",
            url: "http://ja.ht/zubjawdik"
        })

        expect(linksRepositoryInMemory.links).toHaveLength(1);
        expect(linksRepositoryInMemory.links[0].label).toEqual("label update");
        expect(linksRepositoryInMemory.links[0].url).toEqual("http://ja.ht/zubjawdik");

    });

    it("should not be able to update a link not exists", async () => {
        
        await expect(
            updateLink.execute({
                linkId: "0b1492ce-865b-4477-92cd-b810e0597",
                label: "label update",
                url: "http://ruvzatur.mg/joc"
            })
        ).rejects.toEqual(new AppError("Link not exists!"));
    })
})