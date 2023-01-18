import { LinkList } from "../../styles";
import { LinksListEmptyContainer, LinksListEmptySvg } from "./styles";
import { Clipboard } from "phosphor-react";

export function ListLinksEmpty() {
    return (
        <LinkList>
            <table >
                <thead >
                    <tr>
                        <th>Título</th>
                        <th>Url</th>
                        <th>Data</th>
                        <th> </th>
                    </tr>
                </thead>
            </table>

            <LinksListEmptyContainer >
                <div>

                    <LinksListEmptySvg>
                        <Clipboard size={60} />
                    </LinksListEmptySvg>
                    <p>
                        Não existem links salvos
                        <span>Cadastre seus melhores links aqui</span>
                    </p>
                </div>

            </LinksListEmptyContainer>

        </LinkList>
    )
}