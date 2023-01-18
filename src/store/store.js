import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth"
import { journalSlice } from "./journal"
// import { journalSlice } from "./journal/thunks"
// import { counterSlice } from "./slices/counter"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer
    }
})
