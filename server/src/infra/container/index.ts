import { container } from "tsyringe";

import { ILinkRepository } from "../../application/repositories/ILinksRepository";
import { LinksRepository } from "../database/typeorm/repositories/LinksRepository";

container.registerSingleton<ILinkRepository>(
    "LinksRepository",
    LinksRepository
)