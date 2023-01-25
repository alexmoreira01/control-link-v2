import { useContext } from "react";

import { LinkContext } from "../../context/useLinks";
import { LinkSimple } from "phosphor-react";

import linkLogo from "../../assets/link.svg";

import { ButtonImport, HeaderContainer } from "./styles";

export function Header() {
    const { importLinks } = useContext(LinkContext)

    function handleImportLinks(){
        importLinks()
    }

    return (
        <HeaderContainer>
            <div>
                <img src={linkLogo} alt="" />
                <h1>Control-Links</h1>
            </div>

            <ButtonImport

            onClick={handleImportLinks}
            >
                Importar DevGo
                <LinkSimple size={24}/>

            </ButtonImport>
        </HeaderContainer>
    );
}