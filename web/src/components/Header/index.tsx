
import iconLink from '../../assets/link.svg'
import { api } from '../../services/api';

interface ImportLinkModalProps {
    onReloadLinksRequest: () => void;
    handleActiveLoading: () => void;
    handleDesactiveLoading: () => void;
  }

export function Header({onReloadLinksRequest, handleActiveLoading, handleDesactiveLoading}: ImportLinkModalProps) {

    async function handleImportLinkDevGo(){
      handleActiveLoading();

        try {
          await api.post('/devGo/import', {
            url: "https://devgo.com.br/"
          })
    
          onReloadLinksRequest();
        } catch (err) {
          alert("Não foi possível importar os links!")
        }

        handleDesactiveLoading()
      }

    return (
        <div className="mb-16 mx-5 my-5">
            <div className=" m-auto relative flex items-center justify-between whitespace-nowrap">
                <div className='flex items-center '>
                    <img src={iconLink} alt="link icon" />
                    <h1 className="text-3xl text-white font-bold">ControlLinks</h1>
                </div>
    
                <button 
                    className='className="text-2sm text-white font-semibold bg-green-500 rounded-md px-4 py-3 hover:bg-green-600" type="button"'
                    onClick={handleImportLinkDevGo}
                >
                    Importar links DevGo
                    
                </button>
                

                
            </div>
        </div>
    )
}