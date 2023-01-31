import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"
import { fileUpload, loadNotes } from "../../helpers"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNotes, setSavingNote, updateNote } from "./journalSlice"

/**
 * It creates a new note, adds it to the database, and then adds it to the state.
 * @returns A function that returns a function.
 */
export const startNewNote = () => {
    return async (dispatch, getState) => {

        /* Dispatching the action `savingNewNote` and getting the user id from the state. */
        dispatch(savingNewNote())
        const {uid} = getState().auth

        /* Creating a new note with a title, body, and date. */
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        /* Creating a new note with a title, body, and date. */
        const newDoc = doc( collection(FirebaseDB, `/${uid}/journal/notes`) )
        await setDoc(newDoc, newNote)
        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        /* Getting the user id from the state and then it is loading the notes from the database. */
        const {uid} = getState().auth
        if(!uid) throw new Error('El id de usuario no existe')
        const notes = await loadNotes(uid)
        dispatch (setNotes(notes))
    }
}

export const startSaveNotes = () => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote())
        const {uid} = getState().auth
        const {active:activeNote} = getState().journal
        const noteToFireStore = {...activeNote}
        delete noteToFireStore.id
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})
        dispatch(updateNote(activeNote))
    }
}

export const startDeletingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        const {active:activeNote} = getState().journal
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
        await deleteDoc(docRef)
        dispatch(deleteNoteById(activeNote.id))
    }
}

// This method only receives a file for our project then should not be a []
export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSavingNote())
        // await fileUpload( files[0])
        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const imageUrls = await Promise.all(fileUploadPromises)
        dispatch(setPhotosToActiveNotes(imageUrls))

    }
}