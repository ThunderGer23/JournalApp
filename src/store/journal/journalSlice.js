import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState : {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'Test',
        //     title: '',
        //     body: '',
        //     date: 12343,
        //     imageUrls: [],
        // }
    },
   reducers : {
       addNewEmptyNote: (state, action) => {
            // Estas son funciones puras/sincronas, no podemos introducir nada asincrono
       },
       setActiveNote: (state, action) => {

       },
       setNotes: (state, action) => {

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
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSavingNote,
    updateNote,
    deleteNoteById} = journalSlice.actions