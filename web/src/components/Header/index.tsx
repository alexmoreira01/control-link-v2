
// interface ImportLinkModalProps {
//     onReloadLinksRequest?: () => void;
//     handleActiveLoading?: () => void;
//     handleDesactiveLoading?: () => void;
//   }

//     // async function handleImportLinkDevGo(){
//     //   handleActiveLoading();

//     //     try {
//     //       await api.post('/devGo/import', {
//     //         url: "https://devgo.com.br/"
//     //       })

//     //       onReloadLinksRequest();
//     //     } catch (err) {
//     //       alert("Não foi possível importar os links!")
//     //     }

//     //     handleDesactiveLoading()
//     //   }

import { ButtonImport, HeaderContainer } from "./styles";

import linkLogo from "../../assets/link.svg";
import { LinkSimple } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={linkLogo} alt="" />
                <h1>Control-Links</h1>
            </div>

            <ButtonImport

            // onClick={handleImportLinkDevGo}
            >
                Importar DevGo
                <LinkSimple size={24}/>

            </ButtonImport>
        </HeaderContainer>
    );
}
