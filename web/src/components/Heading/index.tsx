import * as Dialog from '@radix-ui/react-dialog';

interface HeadingProps {
    title: string;
}

export function Heading(props: HeadingProps) {
    return (
        <div className=" m-auto flex items-center justify-between">

            <div className='flex items-center justify-self-auto'>
                <h1 className="text-3xl text-white font-bold">{props.title}</h1>
            </div>

            <Dialog.Trigger className="text-2sm text-white font-semibold bg-green-500 rounded-md px-4 py-3 hover:bg-green-600" type="button">
                Criar novo link
            </Dialog.Trigger>
        </div>
    )
}