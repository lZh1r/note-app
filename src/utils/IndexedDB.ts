import {Note} from "./AppState.ts";

enum DBParams {
    DB_NAME = "notes-db",
    STORE_NAME = "notes-store",
    DB_VERSION = 5
}

function openDB() {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const IDBOpenRequest = indexedDB.open(DBParams.DB_NAME, DBParams.DB_VERSION);
        IDBOpenRequest.onupgradeneeded = () => {
                const db = IDBOpenRequest.result;
                if (!db.objectStoreNames.contains(DBParams.STORE_NAME)) {
                    db.createObjectStore(DBParams.STORE_NAME, {keyPath: 'id'});
                }
            };
        IDBOpenRequest.onerror = () => reject(IDBOpenRequest.error);
        IDBOpenRequest.onsuccess = () => resolve(IDBOpenRequest.result);
    });
}

export async function saveNote(note: Note) {
    const db = await openDB();
    const tx = db.transaction(DBParams.STORE_NAME, 'readwrite');
    tx.objectStore(DBParams.STORE_NAME).put(note);
    return tx.commit();
}

export async function deleteNoteById(id: string) {
    const db = await openDB();
    const tx = db.transaction(DBParams.STORE_NAME, 'readwrite');
    tx.objectStore(DBParams.STORE_NAME).delete(id);
    return tx.commit();
}

export async function loadAllNotes(): Promise<Note[]> {
    const db = await openDB();
    const tx = db.transaction(DBParams.STORE_NAME, 'readonly');
    const store = tx.objectStore(DBParams.STORE_NAME);
    return new Promise((resolve, reject) => {
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export async function editNote(id: string, changes: Partial<Note>) {
    const db = await openDB();
    let tx = db.transaction(DBParams.STORE_NAME, 'readwrite');
    const store = tx.objectStore(DBParams.STORE_NAME);
    const request = store.get(id);
    tx = db.transaction(DBParams.STORE_NAME, 'readwrite');
    request.onsuccess = () => {
        const note:Note = request.result;
        const updatedNote = {...note, ...changes};
        store.put(updatedNote);
    };
    return tx.commit();
}