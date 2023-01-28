import { container } from "tsyringe";

import { LinkRepositoryInterface } from "../../application/repositories/links-repository-interface";
import { PrismaLinksRepository } from "../database/prisma/repositories/prisma-links-repository";

container.registerSingleton<LinkRepositoryInterface>(
    "LinksRepository",
    PrismaLinksRepository
)