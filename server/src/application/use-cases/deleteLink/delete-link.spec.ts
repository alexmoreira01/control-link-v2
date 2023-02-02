import { LinksRepositoryInMemory } from "../../../../test/repositories/in-memory-links-repository";
import { AppError } from "../../../infra/errors/app-error";

import { CreateLink } from "../createLink/create-link";
import { DeleteLink } from "./delete-link";

let createLink: CreateLink;
let deleteLink: DeleteLink;
let linksRepositoryInMemory: LinksRepositoryInMemory;

describe("Delete link", () => {
    beforeEach(() => {
        linksRepositoryInMemory = new LinksRepositoryInMemory();
        createLink = new CreateLink(linksRepositoryInMemory);
        deleteLink = new DeleteLink(linksRepositoryInMemory);
    }); 

    it('should be able to delete a link by id', async () => {
        const { link } = await createLink.execute({
            label: "label a link delete",
            url: "http://lulohkow.kw/imagera"
        });

        await deleteLink.execute(link.id);

        expect(linksRepositoryInMemory.links).toHaveLength(0);
    });

    it("should not be able to delete link not existing", async () => {
        await expect(
            deleteLink.execute("5ea08d52-abee-4881-9b23-9d3f266")
        ).rejects.toEqual(new AppError("Link not existing!"));
    })
})