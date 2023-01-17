import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface CreateLinkData {
    label: string;
    url: string;
}

interface Link {
    id: string;
    label: string;
    url: string;
    created_at: string;
    updated_at: string;
}

interface LinkContextData {
    links: Link[];
}

export const LinkContext = createContext({} as LinkContextData);

interface LinksContextProviderProps {
    children: ReactNode;
}


export function LinkContextProvider({ children }: LinksContextProviderProps) {

    // UseEffect get links

    const [links, setLinks] = useState<Link[]>([]);

    useEffect(() => {
        api.get('/list').then(
            response => {
                console.log(response.data)
                // console.log(response.status)
                setLinks(response.data)

            }
        )
    }, []);

    function createNewLink(data: CreateLinkData) {

    }

    function updateLink(){

    }

    return (
        <LinkContext.Provider 
            value={{ 
                links
            }}
        >
            {children}
        </LinkContext.Provider>
    );
};