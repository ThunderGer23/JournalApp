import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState : {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null},
   reducers : {
       login: (state, action) => {
        state.counter += action.payload
        return state
       },
       logout: (state, action) => {

       },
       checkingCredentials: (state, value) => {
          state.status = value.payload
       }
}})

export const {login, logout, checkingCredentials} = authSlice.actions