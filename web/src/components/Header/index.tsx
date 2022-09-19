
import iconLink from '../../assets/link.svg'

export function Header() {

    return (
        <div>
            <div className="max-w-[1200px] m-auto flex items-center justify-between">
                <div className='flex items-center justify-self-auto'>
                    <img src={iconLink} alt="link icon" />
                    <h1 className="text-3xl text-white font-bold">ControlLinks</h1>
                </div>
    
                <button className="text-2sm text-white bg-green-500 rounded-sm px-4 py-3 hover:bg-green-600" type="button">
                    Salvar novo link
                </button>

                
            </div>
        </div>
    )
}