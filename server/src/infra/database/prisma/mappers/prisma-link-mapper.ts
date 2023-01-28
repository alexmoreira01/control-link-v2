import { Link as RawLink } from '@prisma/client';
import { Link } from '../../../../application/entities/link';

export class PrismaLinkMapper {
    static toPrisma(link: Link) {
        return {
            id: link.id,
            label: link.label,
            url: link.url,
            created_at: link.created_at,
            updated_at: link.updated_at,
        };
    }

    static toDomain(raw: RawLink): Link {
        return new Link(
            {
                label: raw.label,
                url: raw.url,
                created_at: raw.created_at,
                updated_at: raw.updated_at
            },
            raw.id,
        );
    }
}
