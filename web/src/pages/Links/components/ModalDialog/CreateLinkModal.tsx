import * as Dialog from '@radix-ui/react-dialog';

import { LinkForm } from '../LinkForm';

import { FormEvent, useContext } from 'react';
import { LinkContext, LinkData } from '../../../../context/useLinks';

import { styled as styledUi, keyframes } from '@stitches/react';
import { ButtonCreate, ModalContainer, ModelContent } from './styles';

interface CreateLinkModalProps {
  onCloseModal: () => void;
}

export function CreateLinkModal({ onCloseModal }: CreateLinkModalProps) {
  const { createNewLink } = useContext(LinkContext)

  function handleCreateLink(event: FormEvent) {
    event.preventDefault();

    const dataForm = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(dataForm)

    const dataCreate: LinkData = {
      label: String(data.label),
      url: String(data.url)
    }

    createNewLink(dataCreate)

    onCloseModal()
  }

  return (
    <ModalContainer>
      <Dialog.Portal>
        <DialogOverlay />
        <ModelContent>
          <DialogContent>
            <Dialog.Title>Cadastre o seu link </Dialog.Title>

            <form onSubmit={handleCreateLink} action="">

              <LinkForm/>
              {/* <TextBox>
                <label htmlFor="label">Título</label>
                <input id='label' type="text" name="label"/>
              </TextBox>

              <TextBox>
                <label htmlFor="url" >Url</label>
                <input id='url' type='text' name="url"/>
              </TextBox> */}
              <footer>
                <ButtonCreate type='submit' >
                  Salvar
                </ButtonCreate>

                <Dialog.Close
                  type="button"
                  className="button-dialog-cancel"
                >
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

// Styles Dialog
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