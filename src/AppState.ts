import {create} from "zustand/react";

interface Note {
    id: string,
    title: string,
    content: string,
    createdAt: Date
}

type AppState = {
    notes: Note[]
}

type AppStateActions = {
    createNote: () => void
    deleteNote: (index: string) => void
    changeNoteTitle: (id: string, newTitle: string) => void
}

export const useStore = create<AppState & AppStateActions>((set) => ({
    notes: [],
    createNote: () => set((state) => ({notes: [...state.notes, {
        id: crypto.randomUUID(), title: "New Note", content: "", createdAt: new Date()}
        ]})),
    deleteNote: (index) => set((state) => ({notes: state.notes.filter((note) => note.id !== index)})),
    //TODO: redo this not to recreate an array every time a name changes
    changeNoteTitle: (id, newTitle) => set((state) => ({notes: state.notes.map((note) =>
        note.id === id ? {id: id, title: newTitle, content: note.content, createdAt: note.createdAt} : note)}))
}));