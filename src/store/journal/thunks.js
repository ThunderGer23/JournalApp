import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"
import { loadNotes } from "../../helpers"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())
        //uid
        const {uid} = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `/${uid}/journal/notes`) )
        await setDoc(newDoc, newNote)
        newNote.id = newDoc.id
        //!Dispatch
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        if(!uid) throw new Error('El id de usuario no existe')
        const notes = await loadNotes(uid)
        dispatch (setNotes(notes))
    }
}