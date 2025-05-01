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
    createNote: (task: Note) => void
    deleteNote: (index: string) => void
}

export const useStore = create<AppState & AppStateActions>((set) => ({
    notes: [],
    createNote: (newNote) => set((state) => ({notes: [...state.notes, newNote]})),
    deleteNote: (index) => set((state) => ({notes: state.notes.filter((note) => note.id !== index)}))
}));