import {Note, useStore} from "../AppState.ts";
import {useParams} from "react-router";

function NotePage() {

    const {noteId} = useParams();

    const note:Note|undefined = useStore.getState().notes.find((note) => note.id === noteId);

    const noteTitle = note!.title;
    const noteContent = note!.content;

    return (
        <div className="text-active">
            <h1 className="text-center text-4xl p-4">{noteTitle}</h1>
            <p>{noteContent}</p>
        </div>
    );
}

export default NotePage;