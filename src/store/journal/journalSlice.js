import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState : {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
   reducers : {
       savingNewNote: (state) => {
            state.isSaving = false
       },
       addNewEmptyNote: (state, action) => {
            // Estas son funciones puras/sincronas, no podemos introducir nada asincrono
            state.notes.push(action.payload)
            state.isSaving = false
       },
       setActiveNote: (state, action) => {
            state.active = action.payload
       },
       setNotes: (state, action) => {
          state.notes = action.payload
       },
       setSavingNote: (state) => {

       },
       updateNote: (state, action) => {

       },
       deleteNoteById: (state, action) => {

       }
   }
})

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSavingNote,
    updateNote,
    deleteNoteById} = journalSlice.actions