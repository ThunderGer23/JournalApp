import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { JournalPage } from "../journal/pages/JournalPage"

export const AppRouter = () => {
  return (
    <Routes>
        {/* {Login} */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>

        {/* {JournalApp} */}
        <Route path='/*' element={<JournalPage/>}/>
    </Routes>
  )
}
