import * as Dialog from '@radix-ui/react-dialog';

import { FormEvent, useContext } from 'react';
import { Link, LinkContext, LinkDataUpdate } from '../../../../context/useLinks';

import { LinkForm } from '../LinkForm';
import { ButtonCreate, ModalContainer, ModelContent } from './styles';
import { styled as styledUi, keyframes } from '@stitches/react';

interface UpdateLinkModalProps {
  linkSelected: Link;
  onCloseModal: () => void;
}

export function UpdateLinkModal({ linkSelected, onCloseModal }: UpdateLinkModalProps) {
  const { updateLink } = useContext(LinkContext);

  async function handleUpdateLink(event: FormEvent) {
    event.preventDefault();

    const dataForm = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(dataForm)

    const dataUpdate: LinkDataUpdate = {
      id: String(linkSelected.id),
      label: String(data.label),
      url: String(data.url)
    }

    updateLink(dataUpdate);
    
    onCloseModal();
  }

  return (
    <ModalContainer>
      <Dialog.Portal>
        <DialogOverlay />
        <ModelContent>
          <DialogContent>
            <Dialog.Title>Edite o seu link</Dialog.Title>

            <form onSubmit={handleUpdateLink} action="">
              <LinkForm linkSelected={linkSelected}/>
              
              {/* <TextBox>
                <label htmlFor="label">Título</label>
                <input name="label" id='label' type='text' defaultValue={linkSelected.label} />
              </TextBox>

              <TextBox>
                <label htmlFor="url" >Url</label>
                <input name="url" id='url' type='text' defaultValue={linkSelected.url} />
              </TextBox> */}

              <footer>
                <ButtonCreate type='submit'>
                  Atualizar
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

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});


const DialogOverlay = styledUi(Dialog.Overlay, {
  backgroundColor: "#0000002f",
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styledUi(Dialog.Content, {
  boxShadow: "0 0 0 0 !important",
});