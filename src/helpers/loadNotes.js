/* Importing the collection and getDocs from the firebase/firestore/lite file. */
import { collection, getDocs } from "firebase/firestore/lite"
/* Importing the FirebaseDB from the firebase file. */
import { FirebaseDB } from "../firebase"

/**
 * It returns a promise that resolves to an array of notes.
 * @param [uid] - The user id of the user who's notes we want to load.
 */
export const loadNotes = async(uid = '') => {
    /*
        * This is a function that is returning a promise. The function is using the uid to get the notes from the database.
    */

    if(!uid) throw new Error('El IUD del usuario no existe')
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes}`)
    const docs = await getDocs(collectionRef)
    const notes = []
    /* Iterating over the docs array and pushing the id and data into the notes array. */
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data})
    })
    return notes
}