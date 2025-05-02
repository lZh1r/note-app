import {Link} from "react-router";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useStore} from "../AppState.ts";

function NoteCard({title, text, path, id}: {title: string, text: string, path: string, id: string}) {

    const [noteTitle, setNoteTitle] = useState(title);
    const changeNoteTitle = useStore.getState().changeNoteTitle;

    function updateTitle() {
        changeNoteTitle(id, noteTitle);
    }

    return (

            <div className="font-main bg-element border-inactive border-2 border-solid rounded-2xl text-inactive
        hover:text-active hover:border-active p-3 m-3 transition-all cursor-pointer">
                <div className="flex flex-row justify-between">
                    <input onBlur={updateTitle} type="text" onChange={(e) => setNoteTitle(e.currentTarget.value)}
                           value={noteTitle}
                           className="text-2xl cursor-text focus:outline-0 focus:text-active border-active focus:border-b-2 w-2xs"/>
                    <FontAwesomeIcon className="text-2xl place-self-center mr-1" icon={faEllipsisVertical} />
                </div>
                <Link to={path}>
                    <p className="h-[10em] p-2 overflow-clip shadow-fade shadow-element">{text}</p>
                </Link>
            </div>


    );
}

export default NoteCard;