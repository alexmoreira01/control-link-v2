import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { LinkContext } from '../../context/useLinks';

import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import { PlusCircle, NotePencil, Trash } from "phosphor-react";

import { CreateLinkModal } from './components/ModalDialog/CreateLinkModal';
import { UpdateLinkModal } from './components/ModalDialog/UpdateLinkModal';
import { ListLinksEmpty } from './components/ListLinksEmpty';
import Loading from '../../components/Loading';

import { ButtonPagination, ButtonsActions, ButtonTrashIcon, LinkContainer, LinkHeading, LinkList, Pagination } from './styles';

export function Link() {
  const { links, deleteLink } = useContext(LinkContext)

  const [isLoading, setIsLoading] = useState(false);

  const [linksPerPage, setLinksPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)

  const [linkSelected, setLinkSelected] = useState(Object);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  // Pagination
  const pages = Math.ceil(links.length / linksPerPage);
  const startIndex = currentPage * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const currentLinks = links.slice(startIndex, endIndex)

  function closeCreateLinkModal() {
    setOpenCreateModal(false)
  }

  function handleCloseUpdateLinkModal() {
    setOpenUpdateModal(false)
  }

  function handleActiveLoading() {
    setIsLoading(true)
  }

  function handleDesactiveLoading() {
    setIsLoading(false)
  }

  function handleDeleteLink(id: string) {
    console.log(id)

    let deleteLinkMessage = confirm("Deseja realmente excluir esse link ?");

    if (deleteLinkMessage) {
      deleteLink(id);
      return alert("Este link foi ecluido!")
    }

    alert("Ação cancelada!")
  }

  return (
    <LinkContainer>

      <LinkHeading>
        <h1>Total de links: {links.length}</h1>

        <Dialog.Root open={openCreateModal} onOpenChange={setOpenCreateModal}>

          <Dialog.Trigger type="button">
            Criar
            <PlusCircle size={24} />
          </Dialog.Trigger>

          <CreateLinkModal
            onCloseModal={closeCreateLinkModal}
          />
        </Dialog.Root>
      </LinkHeading>

      {isLoading ? <Loading /> : ''}

      <LinkList >
        {
          links.length != 0 ?
            <div>
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
                        <ButtonsActions>
                          <Dialog.Root open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
                            <Dialog.Trigger type="button"
                              onClick={() => { setLinkSelected(link) }}
                            >
                              <NotePencil size={29} weight="fill" alt="Editar link" />

                            </Dialog.Trigger>

                            <ButtonTrashIcon onClick={() => { handleDeleteLink(link.id) }}>
                              <Trash size={29} weight="fill" alt="Excluir link" />
                            </ButtonTrashIcon>

                            <UpdateLinkModal
                              linkSelected={linkSelected}
                              onCloseModal={handleCloseUpdateLinkModal}
                            />
                          </Dialog.Root>
                        </ButtonsActions>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

              <Pagination >
                {Array.from(Array(pages), (item, index) => {
                  return (
                    <ButtonPagination 
                      key={index} 
                      className={`${index === currentPage ? "buttonActive" : ""}`}
                      value={index}
                      onClick={() => { setCurrentPage(index) }} >{index + 1}
                    </ButtonPagination>
                  )
                })}
              </Pagination>
            </div>

            :
            <ListLinksEmpty />
        }
      </LinkList>
    </LinkContainer>
  )
}