import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { FirebaseAuth } from "../firebase"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { JournalPage } from "../journal/pages/JournalPage"
import { login, logout } from "../store/auth"
import { CheckingAuth } from "../ui"

export const AppRouter = () => {

  const {status} = useCheckAuth()

  if(status === 'checking') return <CheckingAuth />

  return (

    <Routes>

      {
        (status === 'authenticated')
        ? <Route path='/*' element={<JournalPage/>}/>
        :<Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={<Navigate to= '/auth/login'/>}/>


      {/* {Login} */}

      {/* {JournalApp} */}
    </Routes>
  )
}
