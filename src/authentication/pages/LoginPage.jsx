import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { checkingAuthentication } from '../../store/auth'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

export const LoginPage = () => {

  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm({
    email: 'R2D2@alumno.ipn.mx',
    password: 'EquinoR2D2'
  })
  const onSubmit = event => {
    event.preventDefault()
    dispatch(checkingAuthentication(email, password))
  }

  const onGoogleSignIn = () => {
    dispatch(checkingAuthentication(email, password))
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
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            
            <Grid item xs = {12} sm = {6}>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
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
