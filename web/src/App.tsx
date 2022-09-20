import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';


import { Header } from './components/Header';
import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { CreateLinkModal } from './components/ModalDialog/CreateLinkModal';

interface Link {
  id: number;
  label: string;
  url: string;
  created_at: string;
}

function App() {
  const [links, setLinks] = useState<Link[]>([])
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);

  function handleCloseCreateLinkModal(){
    setOpen(false)
  }

  function handleReloadLinkRequest(){
    setReload(true)
  }

  useEffect(() => {
    axios('http://localhost:3333/links').then(response => {
      setLinks(response.data)
    })

    setReload(false)
  }, [reload])

  return (
    <div className=" mx-auto flex flex-col my-5 mx-5" >

      <Header />

      <div className="max-w-[1140px] m-auto items-center ">

        {/* Heading -- Modal create link*/}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Heading
            title="Gerenciar Links"
          />

          <CreateLinkModal 
            onRequestClose = {handleCloseCreateLinkModal}
            onReloadLinksRequest = {handleReloadLinkRequest}
            />
        </Dialog.Root>


        {/* Table links */}
        <div className="bg-zinc-300 p-5 rounded-lg mt-3">
          <div className="px-2">
            <h2 className="text-base leading-6 font-semibold text-black">Total de links: {links.length}</h2>
          </div>

          <div className="mt-6">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-zinc-400">
                <tr>
                  <th className="px-2 py-3 text-left text-base font-semibold text-black">Actions</th>
                  <th className="px-2 py-3 text-left text-base font-semibold text-black">Título</th>
                  <th className="px-2 py-3 text-left text-base font-semibold text-black">Url</th>
                  <th className="px-2 py-3 text-left text-base font-semibold text-black">Data</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {links.map(link => (
                  <tr key={link.id}>

                    <td className="px-2 py-3 text-base font-semibold whitespace-normal" >
                      <button className="text-base text-white bg-green-600 rounded-md px-3 py-2 hover:bg-green-700" type="button">
                        Editar
                      </button>
                    </td>

                    <td className="px-2 py-3 text-base font-semibold whitespace-normal">
                      {link.label}
                    </td>

                    <td className="px-2 py-3 text-base font-semibold whitespace-normal">
                      <a href={link.url} target="blank">
                        {link.url}
                      </a>
                    </td>

                    <td className="px-2 py-3 text-base font-semibold whitespace-normal">
                      {link.created_at}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
