import { Link } from "../../../application/entities/link";

export class LinkViewModel {
    static toHTTP(link: Link) {

        return {
            id: link.id,
            label: link.label,
            url: link.url,
            created_at: link.created_at,
            updated_at: link.updated_at
        };
    }
}