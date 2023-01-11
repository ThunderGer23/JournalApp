import { singInWithGoogle } from "../../firebase"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        // Falta integrar la llamada al correo institucional para validar al usuario
        dispatch(checkingCredentials(
                    ((email.includes('alumno') || email.includes('docente')) && email.includes('.ipn.mx'))
                    ? 'checking'
                    :'not-authenticated')
                )
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}