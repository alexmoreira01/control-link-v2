import { Link } from "../../../../application/entities/link";
import { LinkRepository } from "../../../../application/repositories/links-repository-interface";
import { PrismaLinkMapper } from "../mappers/prisma-link-mapper";
import prismaService from "../prisma-service";

class PrismaLinksRepository implements LinkRepository {

    private prisma = prismaService

    async createLink(link: Link): Promise<void> {
        const raw = PrismaLinkMapper.toPrisma(link);

        await this.prisma.link.create({
            data: raw,
        })
    }

    async listLinks(): Promise<Link[]> {
        const allLinks = await this.prisma.link.findMany({
            orderBy: {
                created_at: 'desc',
            }
        });

        return allLinks.map((link) => {
            return PrismaLinkMapper.toDomain(link);
        });
    }

    async findLinkById(linkId: string): Promise<Link | null> {
        const linkExists = await this.prisma.link.findUnique({
            where: {
                id: linkId
            },
        });

        if (!linkExists) {
            return null
        }

        return PrismaLinkMapper.toDomain(linkExists);
    }

    async findLinkByLabel(label: string): Promise<Link | null> {
        const link = await this.prisma.link.findUnique({
            where: {
                label: label,
            },
        });

        if (!link) {
            return null;
        }

        return PrismaLinkMapper.toDomain(link)
        
    }

    async updateLink(link: Link): Promise<void> {
        const raw = PrismaLinkMapper.toPrisma(link);

        await this.prisma.link.update({
            where: {
                id: raw.id,
            },
            data: raw
        })
    }

    async deleteLinkById(linkId: string): Promise<void> {
        await this.prisma.link.delete({
            where: {
                id: linkId,
            }
        });
    }
}

export { PrismaLinksRepository }