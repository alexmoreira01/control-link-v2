
import iconLink from '../../assets/link.svg'

export function Header() {

    return (
        <div className="mb-16">
            <div className=" m-auto relative flex items-center justify-between whitespace-nowrap">
                <div className='flex items-center '>
                    <img src={iconLink} alt="link icon" />
                    <h1 className="text-3xl text-white font-bold">ControlLinks</h1>
                </div>
    
                <button className='className="text-2sm text-white font-semibold bg-green-500 rounded-md px-4 py-3 hover:bg-green-600" type="button"'>
                    Importar link
                    
                </button>
                

                
            </div>
        </div>
    )
}