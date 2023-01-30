import { container } from "tsyringe";

import { LinkRepository } from "../../application/repositories/links-repository-interface";
import { PrismaLinksRepository } from "../database/prisma/repositories/prisma-links-repository";

container.registerSingleton<LinkRepository>(
    "LinksRepository",
    PrismaLinksRepository
)