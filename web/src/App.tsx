import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { api } from './services/api';

import './styles/main.css';

import { Header } from './components/Header';
import { Heading } from './components/Heading';

import { CreateLinkModal } from './components/ModalDialog/CreateLinkModal';
import { Update_DeleteLinkModal } from './components/ModalDialog/Update_DeleteLinkModal';
import Loading from './components/Loading';

export interface Link {
  id: number;
  label: string;
  url: string;
  created_at: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState<Link[]>([]);

  const [linksPerPage, setLinksPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)

  const [linkSelected, setLinkSelected] = useState(Object);

  const [open, setOpen] = useState(false);
  const [openUpdate_Delete, setOpenUpdate_Delete] = useState(false);

  const [reload, setReload] = useState(false);

  // Pagination
  const pages = Math.ceil(links.length / linksPerPage);
  const startIndex = currentPage * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const currentLinks = links.slice(startIndex, endIndex)

  function handleCloseCreateLinkModal() {
    setOpen(false)
  }

  function handleCloseUpdate_DeleteLinkModal() {
    setOpenUpdate_Delete(false)
  }

  function handleReloadLinkRequest() {
    setReload(true)
  }

  function handleActiveLoading() {
    setIsLoading(true)
  }

  function handleDesactiveLoading(){
    setIsLoading(false)
  }

  useEffect(() => {
    api.get('/list').then(response => {
      setLinks(response.data)
    })

    setReload(false)
  }, [reload])

  return (
    <div className=" mx-auto flex flex-col">

      <Header 
        onReloadLinksRequest={handleReloadLinkRequest}
        handleActiveLoading={handleActiveLoading}
        handleDesactiveLoading={handleDesactiveLoading}
      />

      {isLoading ? <Loading/> : '' }  

      <div className="max-w-[1140px] m-auto items-center ">

        {/* Heading -- Modal create link*/}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Heading
            title="Gerenciar Links"
          />

          <CreateLinkModal
            onRequestClose={handleCloseCreateLinkModal}
            onReloadLinksRequest={handleReloadLinkRequest}
          />
        </Dialog.Root>

        {/* Table links */}
        <div className="w-[1100px] bg-zinc-300 p-5 rounded-lg mt-3">
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
                {currentLinks.map(link => (
                  <tr key={link.id}>
                    
                    {/* Button edit link */}
                    <td className="px-2 py-3 text-base font-semibold whitespace-normal" >
                      <Dialog.Root open={openUpdate_Delete} onOpenChange={setOpenUpdate_Delete}>
                        <Dialog.Trigger className="text-base text-white bg-green-600 rounded-md px-3 py-2 hover:bg-green-700" type="button"
                          onClick={() => { setLinkSelected(link) }}
                        >
                          Editar
                        </Dialog.Trigger>

                        <Update_DeleteLinkModal
                          linkSelected={linkSelected}
                          onModalClose={handleCloseUpdate_DeleteLinkModal}
                          onReloadLinksRequest={handleReloadLinkRequest}
                        />
                      </Dialog.Root>
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

        <div className="flex justify-center" >
          {Array.from(Array(pages), (item, index) => {
            return <button className={`rounded m-2 px-3 py-1 ${index === currentPage ? "bg-green-600" : "bg-zinc-300"}  hover:bg-green-700`}
                      value={index} 
                      onClick={() =>{ setCurrentPage(index)}} >{index + 1}
                    </button>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
