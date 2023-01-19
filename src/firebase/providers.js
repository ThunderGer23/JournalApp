import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider()

const validUserAndEmail = (displayName, email) => {
    const newname = displayName.toLowerCase().split(' ')
    if(newname.length <=2) return false
    const newEmailTest = email.substr(1, (email.indexOf(email.match(/(\d+)/g)[0])-2))
    let searchLastName = 0
    for( const value of newname){
      searchLastName++
      if(value === newEmailTest) break
    }
    let validate
    if(searchLastName === 1){ //1 y 2
      validate = newname[searchLastName+1].substr(0, 1) + newname[searchLastName*0] + newname[searchLastName].substr(0, 1)
    }else if((searchLastName === 2) || (searchLastName === 3)){ //2 y 3
      validate = newname[searchLastName*0].substr(0, 1) + newname[searchLastName-1] + newname[searchLastName].substr(0, 1)
    }
    return email.substr(0,email.search('@')).includes(validate)
}

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

        // TODO: Actualizar el display en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return{
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        // TODO: Errormessage se puede usar para validar cualquier cosa, inclusive pasarle un error propio
        return {ok: false, errorMessage: (!validUserAndEmail(displayName, email))?'El nombre del usuario ⬆️ y el correo no coinciden ⬇️':'El correo ya ha sido registrado ⬇️', errorCode: error.code}

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