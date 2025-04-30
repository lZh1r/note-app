import NoteCard from "../elements/NoteCard.tsx";


function HomePage() {
    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-main text-active p-4">Note Taking App</h1>
            </header>
            <main className="grid grid-cols-5 p-5">
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
                <NoteCard title="Test" text="Lorem ipsum..." path="/"/>
            </main>
        </>

    );
}

export default HomePage;