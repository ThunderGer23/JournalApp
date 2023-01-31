import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase"
import { clearNotesLogout } from "../journal/journalSlice"
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

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName})
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async(dispatch, getState) => {
        dispatch(checkingCredentials())
        const {ok, uid, photoURL, displayName, errorMessage} = await loginWithEmailPassword({email, password})
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout())
    }
}