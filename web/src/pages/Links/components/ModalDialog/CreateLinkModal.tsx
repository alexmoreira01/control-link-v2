import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { api } from '../../../../services/api';
import { Input } from '../../../../components/Form/input';
import { ButtonCreate, ModalContainer, ModelContent } from './styles';

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
        <ModelContent>

          <Dialog.Overlay/>

          <Dialog.Content>
            <Dialog.Title>Cadastre o seu link </Dialog.Title>

            <form onSubmit={handleCreateLink}>
              <div>
                <label htmlFor="">Título do link</label>
                <Input name="label" id='label' type='text' />
              </div>

              <div>
                <label htmlFor="url" >Url do link</label>
                <Input name="url" id='url' type='text' />
              </div>

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

          </Dialog.Content>
        </ModelContent>
      </Dialog.Portal>
      {/* </div> */}

    </ModalContainer>

  )
}