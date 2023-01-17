
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

import { HeaderContainer } from "./styles";

import linkLogo from "../../assets/link.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={linkLogo} alt="" />
                <h1>Control-Links</h1>
            </div>

            <button

            // onClick={handleImportLinkDevGo}
            >
                Importar links DevGo

            </button>
        </HeaderContainer>
    );
}
