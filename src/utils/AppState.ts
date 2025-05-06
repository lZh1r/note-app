import {create} from "zustand/react";
import {deleteNoteById, editNote, loadAllNotes, saveNote} from "./IndexedDB.ts";

export interface Note {
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
    deleteNote: (id: string) => void
    changeNoteTitle: (id: string, newTitle: string) => void
    changeNoteContent: (id: string, newContent: string) => void
    getNotesFromDB: () => Promise<void>
}

export const useStore = create<AppState & AppStateActions>((set) => ({
    notes: [],
    createNote: () => {
        const newNote:Note = {
            id: crypto.randomUUID(), title: "New Note", content: "", createdAt: new Date()
        };
        set((state) => ({
            notes: [...state.notes, newNote
            ]
        }));
        saveNote(newNote);
    },
    deleteNote: (id) => {
        set((state) => ({notes: state.notes.filter((note) => note.id !== id)}));
        deleteNoteById(id);
    },
    //TODO: redo this not to recreate an array every time a name changes
    changeNoteTitle: (id, newTitle) => {
        set((state) => ({
            notes: state.notes.map((note) =>
                note.id === id ? {id: id, title: newTitle, content: note.content, createdAt: note.createdAt} : note)
        }));
        editNote(id, {title: newTitle});
    },
    changeNoteContent: (id, newContent) => {
        set((state) => ({
            notes: state.notes.map((note) =>
                note.id === id ? {id: id, title: note.title, content: newContent, createdAt: note.createdAt} : note)
        }));
        editNote(id, {content: newContent});
    },
    getNotesFromDB: async () => {
        const notes = await loadAllNotes();
        set({notes: notes});
    }
}));