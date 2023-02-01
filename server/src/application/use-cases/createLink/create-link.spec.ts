import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";
import { AppError } from "../../../infra/errors/app-error";
import { CreateLink } from "./create-link";

let createLink: CreateLink;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("Create link", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory)
    }); 

    it('should be able to create a new link', async () => {
        const { link } = await createLink.execute({
            label: "label a link",
            url: "url a link"
        });

        expect(link).toHaveProperty("id");
        expect(linksRepositoryInMemory.links).toHaveLength(1);
    });

    it("should not be able to create a link with title equals", async () => {
        await createLink.execute({
            label: "labelTest",
            url: "urlTest2"
        }); 

        await expect(
            createLink.execute({
                label: "labelTest",
                url: "urlTest2"
            })
        ).rejects.toEqual(new AppError("Title already exists!"));
    })
})