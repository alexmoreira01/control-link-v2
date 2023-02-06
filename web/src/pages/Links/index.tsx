import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useState } from 'react';
import { LinkContext } from '../../context/useLinks';

import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import { PlusCircle, NotePencil, Trash } from "phosphor-react";

import { CreateLinkModal } from './components/ModalDialog/CreateLinkModal';
import { UpdateLinkModal } from './components/ModalDialog/UpdateLinkModal';
import { ListLinksEmpty } from './components/ListLinksEmpty';
import { Pagination } from './components/Pagination';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ButtonsActions, ButtonTrashIcon, LinkContainer, LinkHeading, LinkList } from './styles';

export function Link() {
  const { links, deleteLink, notifyWarning } = useContext(LinkContext)

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

  function handleDeleteLink(id: string) {
    let deleteLinkMessage = confirm("Deseja realmente excluir esse link ?");

    if (deleteLinkMessage) {
      deleteLink(id);
      return
    }

    notifyWarning("Ação cancelada!")
  }

  function handleSetCurrentPage(index: number) {
    setCurrentPage(index)
  }

  return (
    <LinkContainer>

      <ToastContainer />

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
                        {formatDistanceToNowStrict(new Date(link.created_at), {
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

              <Pagination
                pages={pages}
                currentPage={currentPage}
                onSetCurrentPage={handleSetCurrentPage}
              />

            </div>

            :
            <ListLinksEmpty />
        }
      </LinkList>
    </LinkContainer>
  )
}