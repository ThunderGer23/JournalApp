import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // console.log(credentials);
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: 'true',
            displayName, email, photoURL, uid
        }

    } catch (error) {
        console.error(error);
        return {ok: false, errorMessage: error.message, errorCode: error.code}
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        console.log(resp)

        // TODO: Actualizar el display en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return{
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        // TODO: Errormessage se puede usar para validar cualquier cosa, inclusive pasarle un error propio
        return {ok: false, errorMessage: 'El correo ya ha sido registrado', errorCode: error.code}

    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL, displayName} = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        return {ok: false, errorMessage: 'El nombre del usuario ⬆️ o el correo son incorrectos ⬇️', errorCode: error.code}
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}