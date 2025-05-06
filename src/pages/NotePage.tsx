import {Note, useStore} from "../utils/AppState.ts";
import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import {faBackward, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NotePage() {

    const {noteId} = useParams();

    const note:Note|undefined = useStore.getState().notes.find((note) => note.id === noteId);

    const noteTitle = note!.title;
    const noteContent = note!.content;

    const [savedText, setSavedText] = useState(noteContent);
    const [noteText, setNoteText] = useState(noteContent);
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const changeNoteContent = useStore.getState().changeNoteContent;

    useEffect(() => {
        if (noteText !== savedText) {
            setSaveButtonEnabled(true);
        }
        else {
            setSaveButtonEnabled(false);
        }
    }, [noteText, savedText]);

    function saveText() {
        changeNoteContent(noteId!, noteText);
        setSavedText(noteText);
    }

    return (
        <>
            <div className="text-active font-main pl-5 pr-5">
                <header className="transition-all">
                    <Link className="cursor-pointer place-self-center text-4xl float-left max-sm:text-3xl" to="/">
                        <FontAwesomeIcon className="sm:p-4 pt-4" icon={faBackward} />
                    </Link>
                    <div className="flex justify-center">
                        <h1 className="text-center text-4xl max-sm:text-3xl p-4">{noteTitle}</h1>
                        {saveButtonEnabled &&
                            <button onClick={saveText} className="outline-0 cursor-pointer">
                                <FontAwesomeIcon className="text-4xl max-sm:text-3xl place-self-center" icon={faFloppyDisk} />
                            </button>
                        }
                    </div>
                </header>
                <textarea className="text-xl p-5 focus:outline-0 resize-none w-[100%] rounded-2xl bg-element h-[90vh]
                    [&::-webkit-scrollbar]:w-3
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-inactive
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-active"
                          onChange={(e) => setNoteText(e.currentTarget.value)}
                          value={noteText}/>
            </div>
        </>

    );
}

export default NotePage;