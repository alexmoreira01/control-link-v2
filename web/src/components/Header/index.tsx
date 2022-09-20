
import iconLink from '../../assets/link.svg'
import { Button } from '../Button'

export function Header() {

    return (
        <div className="mb-16">
            <div className=" m-auto relative flex items-center justify-between whitespace-nowrap">
                <div className='flex items-center '>
                    <img src={iconLink} alt="link icon" />
                    <h1 className="text-3xl text-white font-bold">ControlLinks</h1>
                </div>
    
                <Button
                    title="Importar link"
                />

                
            </div>
        </div>
    )
}