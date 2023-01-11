import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('.ipn') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
  password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
  displayName : [ (value) => value.length >= 8 , 'El nombre es obligatorio y debe tener más de 8 letras']
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {formState, displayName, email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid} = useForm( formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    const valid = validEmail(formState.email, formState.displayName)
    if (!isFormValid || !valid) return;
    console.log(formState)
    console.log(valid)
    console.log(!isFormValid)
  }

  const validEmail = (email, name) => {
    const newname = name.toLowerCase().split(' ')
    const validate = newname[0].substr(0, 1) + newname[2] + newname[3].substr(0, 1)
    return email.substr(0,email.search('@')).includes(validate)
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={onSubmit} action="">
        <Grid container>
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Escribe tu nombre"
              fullWidth
              name='displayName'
              value={displayName}
              onChange ={onInputChange}
              error ={!!displayNameValid && formSubmitted}
              helperText={(formSubmitted)?displayNameValid:null}/>
          </Grid>

          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label="Correo Institucional"
              type="email"
              placeholder="correo@alumno.ipn.mx"
              fullWidth
              name='email'
              value={email}
              onChange ={onInputChange}
              error ={!!emailValid && formSubmitted}
              helperText={(formSubmitted)?emailValid:null}/>
          </Grid>
          
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              error ={!!passwordValid && formSubmitted}
              helperText={(formSubmitted)?passwordValid:null}
              onChange ={onInputChange}/>
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs = {12}>
              <Button type='submit' variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction= 'row' justifyContent='end'>
          <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
