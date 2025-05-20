interface IButtonProps {
    title: string;
    onClick: () => void;
}

export default function Button(props: IButtonProps) {
    return <button
        onClick={props.onClick}
        className="py-2 px-1.5 bg-amber-300 rounded-md shadow-lg">
        {props.title}
    </button>
}