import { createSlice } from '@reduxjs/toolkit';

/* It's creating a slice of the store. */
export const journalSlice = createSlice({
   name: 'journal',
   /* It's the initial state of the store. */
   initialState : {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
   reducers : {
       /* It's a reducer function that will be called when the action `savingNewNote` is dispatched. */
       savingNewNote: (state) => {
            state.isSaving = false
       },
       /* It's a reducer function that will be called when the action `addNewEmptyNote` is dispatched. */
       addNewEmptyNote: (state, action) => {
            // Estas son funciones puras/sincronas, no podemos introducir nada asincrono
            state.notes.push(action.payload)
            state.isSaving = false
       },
       /* It's a reducer function that will be called when the action `setActiveNote` is dispatched. */
       setActiveNote: (state, action) => {
            state.active = action.payload
       },
       /* It's a reducer function that will be called when the action `setNotes` is dispatched. */
       setNotes: (state, action) => {
          state.notes = action.payload
       },
       /* Nothing. It's a placeholder for a future action. */
       setSavingNote: (state) => {

       },
       /* A reducer function that will be called when the action `updateNote` is dispatched. */
       updateNote: (state, action) => {

       },
       /* A reducer function that will be called when the action `deleteNoteById` is dispatched. */
       deleteNoteById: (state, action) => {

       }
   }
})

/* It's exporting the actions that we have defined in the reducer. */
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSavingNote,
    updateNote,
    deleteNoteById} = journalSlice.actions