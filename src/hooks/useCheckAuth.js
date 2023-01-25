import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../firebase'
import { login, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal'

/**
 * A hook that is checking if the user is logged in or not.
 * @returns The status of the user.
 */
export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    /* A hook that is checking if the user is logged in or not. */
    useEffect(() => { onAuthStateChanged(FirebaseAuth, async( user) => {
        if(!user) return dispatch(logout())
        const {uid, email, displayName, phothoURL } = user
        dispatch(login( { uid, email, displayName, phothoURL }))
        dispatch(startLoadingNotes())
      })

    }, [])

  /* Returning the status of the user. */
  return {
    status
    }
}
