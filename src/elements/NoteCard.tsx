import {Link} from "react-router";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {RefObject, useState} from "react";
import {useStore} from "../utils/AppState.ts";

function NoteCard({title, text, path, id, ref}: {title: string, text: string, path: string, id: string, ref: RefObject<any>}) {

    const [noteTitle, setNoteTitle] = useState(title);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeNoteTitle = useStore.getState().changeNoteTitle;
    const deleteNote = useStore.getState().deleteNote;
    function updateTitle() {
        changeNoteTitle(id, noteTitle);
    }

    return (
            <div className="font-main bg-element border-inactive border-2 border-solid rounded-2xl text-inactive hover:text-active
                hover:border-active p-3 m-3 transition-all">
                <div className="flex flex-row justify-between">
                    <input onBlur={updateTitle} type="text" ref={ref} onChange={(e) => setNoteTitle(e.currentTarget.value)}
                           value={noteTitle}
                           className="text-2xl cursor-text focus:outline-0 focus:text-active border-active focus:border-b-2 w-[10rem] selection:bg-gray-600"/>
                    <button onClick={() => setIsMenuOpen(s => !s)} className="cursor-pointer outline-none pr-2 pl-2">
                        <FontAwesomeIcon className="text-2xl place-self-center mr-1" icon={faEllipsisVertical} />
                    </button>
                </div>
                {
                    isMenuOpen ?
                        <div className="h-[8em] text-xl flex p-1 flex-col text-inactive">
                            <button onClick={() => deleteNote(id)} className="cursor-pointer outline-none hover:text-active w-fit p-1 place-self-end">Delete</button>
                            <button className="cursor-pointer outline-none hover:text-active w-fit p-1 place-self-end">Foo</button>
                            <button className="cursor-pointer outline-none hover:text-active w-fit p-1 place-self-end">Bar</button>
                        </div> :
                        <Link to={path}>
                            <p className="h-[10em] p-2 overflow-clip shadow-fade shadow-element">{text}</p>
                        </Link>
                }
            </div>
    );
}

export default NoteCard;