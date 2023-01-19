import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"
import { addNewEmptyNote, setActiveNote } from "./journalSlice"

export const startNewNote = () => {
    return async (dispatch, getState) => {

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
        console.log(await setDoc(newDoc, newNote));
        //!Dispatch
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}