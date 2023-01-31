import { ImageGalery, FilesList } from "../components"
import { Assessment, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { NothingSelectedView } from "./"
import { useForm } from "../../hooks/"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNotes } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
export const NoteView = () => {

  const dispatch = useDispatch()
  const { active: noteActive, messageSaved, isSaving} = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState} = useForm(noteActive)

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote( formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0)
      Swal.fire( 'Nota actualizada', messageSaved, 'success' )
  }, [messageSaved])
  

  const onSaveNote = () => dispatch(startSaveNotes())

  return (
    <Grid container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{mb:1}}
      className = 'animate__animated animte__fadeIn animate__faster'>
        
        <Grid item>
          <Typography fontSize={39} fontWeight = 'light'> {dateString} </Typography>
        </Grid>
        <Grid item>
          <Button 
            color= "primary"
            disabled= {isSaving}
            sx= {{padding: 2}}
            onClick = {onSaveNote}>
            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField 
            type= "text"
            variant = "filled"
            placeholder = "Ingrese un titulo"
            label = "Ingrese un titulo"
            sx= {{border: 'none', mb: 1}}
            name = "title"
            value= {title}
            onChange= {onInputChange}
            fullWidth/>
          <TextField 
            type= "text"
            variant = "filled"
            placeholder = "¿Qué sucedió en el día?"
            minRows= {5}
            name = "body"
            value= {body}
            onChange= {onInputChange}
            multiline
            fullWidth/>
          <ImageGalery />
        </Grid>
                {/* <NothingSelectedView /> */}
    </Grid>
  )
}
