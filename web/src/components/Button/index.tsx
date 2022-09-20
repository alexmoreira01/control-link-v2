

interface ButtonProps{
    title: string;
}

export function Button(props: ButtonProps){
    return(
        <button className="text-2sm text-white bg-green-500 font-semibold rounded-md px-4 py-3 hover:bg-green-600" type="button">
            {props.title}
        </button>

    )
}