import { useMemo } from 'react'
import { useForm } from '../../hooks'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

export const LoginPage = () => {

  const {status, errorMessage} = useSelector( state => state.auth)

  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm({
    email: 'R2D2@alumno.ipn.mx',
    password: 'EquinoR2D2'
  })

  const isAuthenticating = useMemo(() => status === 'authenticated', [status])

  const onSubmit = event => {
    event.preventDefault()
    // dispatch(checkingAuthentication(email, password))
    dispatch(startLoginWithEmailPassword( {email, password} ))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form action="" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label='Correo Institucional'
              type='email'
              placeholder='correo@alumno.ipn.mx'
              name='email'
              value = {email}
              onChange={onInputChange}
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
              name='password'
              value = {password}
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
