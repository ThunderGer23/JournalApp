import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

/* A function that returns a React Router component. */
export const AuthRoutes = () => {
  /* A React Router component that is used to render the routes. */
  return (
    <Routes>
        
        <Route path="login" element= {<LoginPage/>}/>
        <Route path="register" element= {<RegisterPage/>}/>

        <Route path="/*" element= {<Navigate to="/auth/login" />}/>
    </Routes>
  )
}
