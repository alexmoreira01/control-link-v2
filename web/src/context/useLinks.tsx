import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface LinkData {
  label: string;
  url: string;
}

export interface LinkDataUpdate extends LinkData {
  id: string
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
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
  notifyWarning: (message: string) => void;
}

export const LinkContext = createContext({} as LinkContextData);

const notifySuccess = (message: string) => toast.success(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

const notifyError = (message: string) => toast.error(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

const notifyWarning = (message: string) => toast.warn(
  message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

interface LinksContextProviderProps {
  children: ReactNode;
}

export function LinkContextProvider({ children }: LinksContextProviderProps) {
  const [links, setLinks] = useState<Link[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/').then(
      response => {
        setLinks(response.data)
      }
    )
    .catch((error) => {
      notifyError("N??o foi poss??vel listat os links, servi??o indispon??vel!")
    })
  }, [isUpdate]);

  async function createNewLink(data: LinkData) {
    await api.post('/', {
      label: data.label,
      url: data.url
    }).then(
      response => notifySuccess("Link cadastrado com sucesso!")
    )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Link j?? existente, altere o t??tulo!")
        }

        notifyError("N??o foi poss??vel criar o link, servi??o indispon??vel!")
      })

    setIsUpdate(!isUpdate)
  }

  async function updateLink(data: LinkDataUpdate) {
    await api.put(`/${data.id}`, {
      label: data.label,
      url: data.url,
    }).then(
      response => notifySuccess("Link editado com sucesso!")
    )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Link  inexistente, altere o id!")
        } else if (error.response.status === 500){
          return notifyWarning("Link j?? existente, altere o t??tulo!")
        }

        notifyError("N??o foi poss??vel editar o link, servi??o indispon??vel!")
      })

    setIsUpdate(!isUpdate)
  }

  async function deleteLink(id: string) {
      await api.delete(`/${id}`)
      .then(
        response => notifySuccess("Link excluido com sucesso!")
      )
      .catch((error) => {
        if (error.response.status === 400) {
          return notifyWarning("Link  inexistente, altere o id!")
        }

        notifyError("N??o foi poss??vel excluir o link, servi??o indispon??vel!")
      })
    
    setIsUpdate(!isUpdate)
  }

  async function importLinks() {
    setIsLoading(true);

    try {
      await api.post('/import', {
        url: "https://devgo.com.br/"
      })

      notifySuccess("Links importados com sucesso!");
    } catch (err) {
      return notifyError("N??o foi poss??vel importar os links!")
    }

    setIsLoading(false);
    setIsUpdate(!isUpdate)
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        createNewLink,
        updateLink,
        deleteLink,
        importLinks,
        isLoading,
        notifySuccess,
        notifyError,
        notifyWarning
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};