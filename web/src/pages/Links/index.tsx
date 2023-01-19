import { useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { PlusCircle, NotePencil } from "phosphor-react";

import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import { CreateLinkModal } from './components/ModalDialog/CreateLinkModal';
import Loading from '../../components/Loading';
import { Update_DeleteLinkModal } from './components/ModalDialog/Update_DeleteLinkModal';
import { api } from '../../services/api';

import { LinkContainer, LinkHeading, LinkList, Pagination } from './styles';
import { LinkContext } from '../../context/useLinks';
import { ListLinksEmpty } from './components/ListLinksEmpty';

export function Link() {
  const { links } = useContext(LinkContext)

  const [isLoading, setIsLoading] = useState(false);
  // const [links, setLinks] = useState<Link[]>([]);

  const [linksPerPage, setLinksPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)

  const [linkSelected, setLinkSelected] = useState(Object);

  const [open, setOpen] = useState(false);
  const [openUpdate_Delete, setOpenUpdate_Delete] = useState(false);

  const [reload, setReload] = useState(false);

  // Pagination
  const pages = Math.ceil(links.length / linksPerPage);
  const startIndex = currentPage * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const currentLinks = links.slice(startIndex, endIndex)

  function handleCloseCreateLinkModal() {
    setOpen(false)
  }

  function handleCloseUpdate_DeleteLinkModal() {
    setOpenUpdate_Delete(false)
  }

  function handleReloadLinkRequest() {
    setReload(true)
  }

  function handleActiveLoading() {
    setIsLoading(true)
  }

  function handleDesactiveLoading() {
    setIsLoading(false)
  }

  // useEffect(() => {
  //   api.get('/list').then(response => {
  //     setLinks(response.data)
  //   })

  //   setReload(false)
  // }, [reload])

  return (
    <LinkContainer>

      <LinkHeading>
        <h1>Gerenciar Links</h1>

        {/* Heading -- Modal create link*/}
        <Dialog.Root open={open} onOpenChange={setOpen}>

          <Dialog.Trigger type="button">
            Criar
            <PlusCircle size={24} />
          </Dialog.Trigger>
          
          <CreateLinkModal
            onRequestClose={handleCloseCreateLinkModal}
            onReloadLinksRequest={handleReloadLinkRequest}
          />
        </Dialog.Root>
      </LinkHeading>

      {isLoading ? <Loading /> : ''}

      {/* <div>
        <span >Total de links: {links.length}</span>
      </div> */}

      <LinkList >
        {
          links.length != 0 ?
            <>
              <table >
                <thead >
                  <tr>
                    <th>Título</th>
                    <th>Url</th>
                    <th>Data</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody >
                  {currentLinks.map(link => (
                    <tr key={link.id}>
                      <td>{link.label}</td>

                      <td><a href={link.url} target="blank">{link.url}</a></td>

                      <td>
                        {formatDistanceToNow(new Date(link.created_at), {
                          addSuffix: true,
                          locale: ptBR
                        })}
                      </td>

                      <td>
                        <Dialog.Root open={openUpdate_Delete} onOpenChange={setOpenUpdate_Delete}>
                          <Dialog.Trigger type="button"
                            onClick={() => { setLinkSelected(link) }}
                          >
                            <NotePencil size={29} weight="fill" alt="Editar link" />
                          </Dialog.Trigger>

                          <Update_DeleteLinkModal
                            linkSelected={linkSelected}
                            onModalClose={handleCloseUpdate_DeleteLinkModal}
                            onReloadLinksRequest={handleReloadLinkRequest}
                          />
                        </Dialog.Root>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

              <Pagination >
                {Array.from(Array(pages), (item, index) => {
                  return (
                    <button className={`rounded m-2 px-3 py-1 ${index === currentPage ? "bg-green-600" : "bg-zinc-300"}  hover:bg-green-700`}
                      value={index}
                      onClick={() => { setCurrentPage(index) }} >{index + 1}
                    </button>
                  )
                })}
              </Pagination>
            </>

            :
            <ListLinksEmpty />
        }
      </LinkList>


    </LinkContainer>
  )
}


