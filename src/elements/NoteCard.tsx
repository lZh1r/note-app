import {Link} from "react-router";

function NoteCard({title, text, path}: {title: string, text: string, path:string}) {
    return (
        <Link to={path}>
            <div className="font-main bg-element border-inactive border-2 border-solid rounded-2xl text-inactive
        hover:text-active hover:border-active p-3 m-3 transition-all cursor-pointer">
                <h2 className="text-2xl">{title}</h2>
                <p className="h-[10em] p-2">{text}</p>
            </div>
        </Link>

    );
}

export default NoteCard;