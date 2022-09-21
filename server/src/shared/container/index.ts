import { container } from "tsyringe";

import { ILinkRepository } from "../../modules/links/repositories/ILinksRepository";
import { LinksRepository } from "../../modules/links/repositories/LinksRepository";

container.registerSingleton<ILinkRepository>(
    "LinksRepository",
    LinksRepository
)