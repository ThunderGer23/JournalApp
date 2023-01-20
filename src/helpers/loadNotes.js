import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase"

export const loadNotes = (uid = '') => {
    if(!uid) throw new Error('El IUD del usuario no existe')
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes}`)
    const docs = await getDocs(collectionRef)
    const notes = []
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data})
    })
}