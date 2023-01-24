import { useMemo, useState } from 'react'
import { useForm } from '../../hooks'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

/* The initial state of the form. */
const formData = {
  email: '',
  password: ''
}

/* A validation for the form. */
const formValidations = {
  email: [ (value) => value.includes('.ipn.mx') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
  password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
}

/* A function that returns a component LoginPage. */
export const LoginPage = () => {

  const {status, errorMessage} = useSelector( state => state.auth)

  /* A hook that is used to validate the form. */
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const {formState, isFormValid, email, password, emailValid, passwordValid, onInputChange} = useForm(formData, formValidations)

  /* A hook that is used to check if the user is authenticated. */
  const isAuthenticating = useMemo(() => status === 'authenticated', [status])

  /**
   * If the form is valid, dispatch the startLoginWithEmailPassword action creator with the email and
   * password values.
   * @returns the dispatch function.
   */
  const onSubmit = event => {
    event.preventDefault()
    // dispatch(checkingAuthentication(email, password))
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword( {email, password} ))
  }

  /**
   * OnGoogleSignIn() is a function that dispatches the startGoogleSignIn() action creator.
   */
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  /* Returning the AuthLayout component with the form. */
  return (
    <AuthLayout title='Login'>
      <form action="" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label='Correo Institucional'
              type='email'
              placeholder='correo@alumno.ipn.mx'
              required
              name='email'
              value = {email}
              onChange={onInputChange}
              error ={!!emailValid && formSubmitted}
              helperText={(formSubmitted)?emailValid:null}
              fullWidth/>
          </Grid>
          <Grid
            item
            xs = {12}
            sx = {{mt:2}}
            display= {!!errorMessage?'':'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              required
              name='password'
              value = {password}
              error ={!!passwordValid &&  formSubmitted}
              helperText={(formSubmitted)?passwordValid:null}
              onChange = {onInputChange}
              fullWidth/>
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs = {12} sm = {6}>
              <Button type='submit' variant='contained' disabled = {isAuthenticating} fullWidth>
                Login
              </Button>
            </Grid>
            
            <Grid item xs = {12} sm = {6}>
              <Button onClick={onGoogleSignIn} variant='contained' disabled = {isAuthenticating} fullWidth>
                <Google />
                <Typography sx = {{ ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction= 'row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Registrarse
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
