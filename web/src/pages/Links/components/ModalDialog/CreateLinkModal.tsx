import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { api } from '../../../../services/api';
import { ButtonCreate, ModalContainer, ModelContent, TextBox } from './styles';

import { styled as styledUi, keyframes } from '@stitches/react';


interface CreateLinkModalProps {
  onRequestClose: () => void;
  onReloadLinksRequest: () => void;
}

export function CreateLinkModal({ onRequestClose, onReloadLinksRequest }: CreateLinkModalProps) {

  async function handleCreateLink(event: FormEvent) {

    event.preventDefault();

    const dataForm = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(dataForm)

    if (data.label == '' && data.url == '') {
      alert("Não foi possível criar o seu link, dados estão incompletos!")
      return
    }

    try {
      await api.post('/create', {
        label: data.label,
        url: data.url
      })

      onReloadLinksRequest();
      onRequestClose();
    } catch (err) {
      alert("Não foi possível criar o seu link!")
    }
  }

  return (
    <ModalContainer>
      {/* <div> */}

      <Dialog.Portal>
        <DialogOverlay />
        <ModelContent>

          <Dialog.Overlay/>

          <DialogContent>
            <Dialog.Title>Cadastre o seu link </Dialog.Title>

            <form onSubmit={handleCreateLink}>
              <TextBox>
                <label htmlFor="">Título do link</label>
                <input type="text" id='label'/>
                {/* <Input name="label" id='label' type='text' /> */}
              </TextBox>

              <TextBox>
                <label htmlFor="url" >Url do link</label>
                <input name="url" id='url' type='text' />
              </TextBox>

              <footer>

                <ButtonCreate type='submit' >
                  Salvar
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
      {/* </div> */}

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