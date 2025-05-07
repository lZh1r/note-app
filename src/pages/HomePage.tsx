import NoteCard from "../elements/NoteCard.tsx";
import NoteCreationButton from "../elements/NoteCreationButton.tsx";
import {useStore} from "../utils/AppState.ts";
import {useEffect, useRef, useState} from "react";


function HomePage() {

    const notes = useStore((state) => state.notes);
    const prevLength = useRef(notes.length);
    //not to focus on input element when reloading the page (prolly can be done much easier, but idc)
    const [grace, setGrace] = useState(true);
    const elementToFocusOn = useRef<HTMLFormElement>(null);
    const getSavedNotes = useStore((s) => s.getNotesFromDB);

    useEffect(() => {
        getSavedNotes().then(() => setGrace(false));
    }, []);

    useEffect(() => {
        if (notes.length > prevLength.current && !grace) {
            elementToFocusOn.current!.focus();
            elementToFocusOn.current!.select();
        }
        prevLength.current = notes.length;
    }, [notes]);

    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-main text-active p-4">Note Taking App</h1>
            </header>
            <main className="grid grid-cols-5 p-5 max-md:flex flex-col">
                {notes.map((note) => <NoteCard key={note.id} title={note.title} text={note.content}
                                                      path={`/note/${note.id}`} id={note.id} ref={elementToFocusOn}/>)}
                <NoteCreationButton/>
            </main>
        </>

    );
}

export default HomePage;