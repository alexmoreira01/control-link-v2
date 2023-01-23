import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface LinkData {
    label: string;
    url: string;
}

export interface LinkDataUpdate extends LinkData {
    id:string
}

export interface Link {
    id: string;
    label: string;
    url: string;
    created_at: string;
    updated_at: string;
}

interface LinkContextData {
    links: Link[];
    createNewLink: (data: LinkData) => void;
    updateLink: (data: LinkDataUpdate) => void;
    deleteLink: (id: string) => void;
    importLinks: () => void;
    isLoading: boolean;
}

export const LinkContext = createContext({} as LinkContextData);

interface LinksContextProviderProps {
    children: ReactNode;
}

export function LinkContextProvider({ children }: LinksContextProviderProps) {
    const [links, setLinks] = useState<Link[]>([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        api.get('/list').then(
            response => {
                setLinks(response.data)
            }
        )
    }, [isUpdate]);

    async function createNewLink(data: LinkData) {
        try {
            await api.post('/create', {
                label: data.label,
                url: data.url
            })
        } catch (err) {
            return alert("Não foi possível criar o seu link!")
        }

        setIsUpdate(!isUpdate)
    }

    async function updateLink(data: LinkDataUpdate) {
        try {
            await api.put(`/update/${data.id}`, {
                label: data.label,
                url: data.url,
            })
        } catch (err) {
            return alert("Não foi possível editar o seu link!")
        }

        setIsUpdate(!isUpdate)
    }

    async function deleteLink(id: string) {

      try {
        await api.delete(`/delete/${id}`)
      } catch (err) {
        return alert("Não foi possível excluir o seu link!")
      }

      setIsUpdate(!isUpdate)
    }

    async function importLinks(){
        setIsLoading(!isLoading);
        // handleActiveLoading();

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
        setIsLoading(!isLoading);
    }

    return (
        <LinkContext.Provider
            value={{
                links,
                createNewLink,
                updateLink,
                deleteLink,
                importLinks,
                isLoading
            }}
        >
            {children}
        </LinkContext.Provider>
    );
};