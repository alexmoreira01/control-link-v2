import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { api } from '../../services/api';
import { Input } from '../Form/input';

interface CreateLinkModalProps {
  onRequestClose: () => void;
  onReloadLinksRequest: () => void;
}

export function CreateLinkModal({onRequestClose, onReloadLinksRequest}: CreateLinkModalProps) {

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
      // await axios.post(`http://localhost:3333/link/`, {
      //   label: data.label,
      //   url: data.url,
      // })

      onReloadLinksRequest();
      onRequestClose();
    } catch (err) {
      alert("Não foi possível criar o seu link!")
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-zinc-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title>Cadastre o seu link </Dialog.Title>

        <form onSubmit={handleCreateLink} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Qual o título do seu link</label>
            <Input name="label" id='label' type='text' />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" >Qual a url</label>
            <Input name="url" id='url' type='text' />
          </div>

          <footer className="mt-4 flex justify-between gap-4">

            <button
              className="text-2sm text-white bg-green-500 font-semibold rounded-md px-4 py-3 hover:bg-green-600"
              type='submit'
            >
              Salvar
            </button>


            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
              Cancelar
            </Dialog.Close >
          </footer>

        </form>

      </Dialog.Content>
    </Dialog.Portal>
  )
}