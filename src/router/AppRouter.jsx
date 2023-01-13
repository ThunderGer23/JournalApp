import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { JournalPage } from "../journal/pages/JournalPage"
import { CheckingAuth } from "../ui"

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)

  if(status === 'checking') return <CheckingAuth />

  return (
    <Routes>
        {/* {Login} */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>

        {/* {JournalApp} */}
        <Route path='/*' element={<JournalPage/>}/>
    </Routes>
  )
}
