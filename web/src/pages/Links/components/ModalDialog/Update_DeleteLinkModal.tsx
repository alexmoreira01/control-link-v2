import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { Link } from '../../../../context/useLinks';
import { api } from '../../../../services/api';
import { Input } from '../../../../components/Form/input';
import { ButtonCreate, ButtonDelete, ModalContainer, ModelContent } from './styles';

interface Update_DeleteLinkModalProps {
  linkSelected: Link;
  onModalClose: () => void;
  onReloadLinksRequest: () => void;
}

export function Update_DeleteLinkModal({ linkSelected, onModalClose, onReloadLinksRequest }: Update_DeleteLinkModalProps) {

  async function handleUpdateLink(event: FormEvent) {

    event.preventDefault();

    const dataForm = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(dataForm)

    if (data.label == '' && data.url == '') {
      alert("Não foi possível editar o seu link, dados estão incompletos!")
      return
    }

    try {
      await api.put(`/update/${linkSelected.id}`, {
        label: data.label,
        url: data.url,
      })

      onReloadLinksRequest();
      onModalClose();
    } catch (err) {
      alert("Não foi possível editar o seu link!")
    }
  }

  async function handleDeleteLink(event: FormEvent) {

    event.preventDefault();

    try {
      await api.delete(`/delete/${linkSelected.id}`)

      onReloadLinksRequest();
      onModalClose();
    } catch (err) {
      alert("Não foi possível excluir o seu link!")
    }
  }

  return (
    <ModalContainer>
        <Dialog.Portal>
          <ModelContent>

            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-zinc-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="flex justify-between items-center">
                Edite o seu link

                  <ButtonDelete type='button' onClick={handleDeleteLink}>
                    Deletar
                  </ButtonDelete>

              </Dialog.Title>

              <form onSubmit={handleUpdateLink} className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="label">Título do link</label>
                  <Input name="label" id='label' type='text' defaultValue={linkSelected.label} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="url" >Url do link</label>
                  <Input name="url" id='url' type='text' defaultValue={linkSelected.url} />
                </div>

                <footer>

                  <ButtonCreate type='submit'>
                    Atualizar
                  </ButtonCreate>


                  <Dialog.Close
                    type="button"
                    className="button-dialog-cancel">
                    Cancelar
                  </Dialog.Close >
                </footer>

              </form>

            </Dialog.Content>
          </ModelContent>
        </Dialog.Portal>
    </ModalContainer>
  )
}