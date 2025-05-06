import NoteCard from "../elements/NoteCard.tsx";
import NoteCreationButton from "../elements/NoteCreationButton.tsx";
import {useStore} from "../utils/AppState.ts";
import {useEffect} from "react";


function HomePage() {

    const notes = useStore((state) => state.notes);
    const getSavedNotes = useStore((s) => s.getNotesFromDB);

    useEffect(() => {
        getSavedNotes();
    }, []);

    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-main text-active p-4">Note Taking App</h1>
            </header>
            <main className="grid grid-cols-5 p-5 max-md:flex flex-col">
                {notes.map((note) => <NoteCard key={note.id} title={note.title} text={note.content}
                                                      path={`/note/${note.id}`} id={note.id}/>)}
                <NoteCreationButton/>
            </main>
        </>

    );
}

export default HomePage;