import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { Link } from '../../../../context/useLinks';
import { api } from '../../../../services/api';
import { Input } from '../../../../components/Form/input';
import { ButtonCreate, ButtonDelete, ModalContainer, ModelContent, TextBox } from './styles';
import { styled as styledUi, keyframes } from '@stitches/react';


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
          <DialogOverlay />

          <ModelContent>

            <Dialog.Overlay/>

            <DialogContent>
              <Dialog.Title>
                Edite o seu link

                  <ButtonDelete type='button' onClick={handleDeleteLink}>
                    Deletar
                  </ButtonDelete>

              </Dialog.Title>

              <form onSubmit={handleUpdateLink}>
                <TextBox>
                  <label htmlFor="label">Título do link</label>
                  <Input name="label" id='label' type='text' defaultValue={linkSelected.label} />
                </TextBox>

                <TextBox>
                  <label htmlFor="url" >Url do link</label>
                  <Input name="url" id='url' type='text' defaultValue={linkSelected.url} />
                </TextBox>

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

            </DialogContent>
          </ModelContent>
        </Dialog.Portal>
    </ModalContainer>
  )
}

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});


const DialogOverlay = styledUi(Dialog.Overlay, {
  backgroundColor: "#00000094",
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styledUi(Dialog.Content, {
  boxShadow: "0 0 0 0 !important",
});