import NoteCard from "../elements/NoteCard.tsx";
import NoteCreationButton from "../elements/NoteCreationButton.tsx";
import {useStore} from "../AppState.ts";


function HomePage() {

    const notes = useStore().notes;

    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-main text-active p-4">Note Taking App</h1>
            </header>
            <main className="grid grid-cols-5 p-5">
                {notes.map((note, index) => <NoteCard key={index} title={note.title} text={note.content}
                                                      path={`/${note.id}`} id={note.id}/>)}
                <NoteCreationButton/>
            </main>
        </>

    );
}

export default HomePage;