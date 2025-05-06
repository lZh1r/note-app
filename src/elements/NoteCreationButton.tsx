import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useStore} from "../utils/AppState.ts";

function NoteCreationButton() {

    const createNote = useStore().createNote;

    return (
        <button className="font-main text-2xl bg-element border-inactive border-2 border-solid rounded-2xl text-inactive
        hover:text-active hover:border-active p-3 m-3 transition-all cursor-pointer h-55"
                onClick={createNote}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}

export default NoteCreationButton;