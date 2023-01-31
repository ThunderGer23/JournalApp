import { ImageGalery, FilesList } from "../components"
import { Assessment, SaveOutlined, UploadFile } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { NothingSelectedView } from "./"
import { useForm } from "../../hooks/"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNotes, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
import { useRef } from "react"
export const NoteView = () => {

  const dispatch = useDispatch()
  const { active: noteActive, messageSaved, isSaving} = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState} = useForm(noteActive)

  const dateString = useMemo(() => {
    const newDate = new Date(date).toUTCString().replace('GMT', '')
    return newDate.replace(newDate.split(' ')[newDate.split(' ').length-2], '')
  }, [date])

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote( formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0)
      Swal.fire( 'Nota actualizada', messageSaved, 'success' )
  }, [messageSaved])
  

  const onSaveNote = () => dispatch(startSaveNotes())

  const onFileInputChange = ({target}) => {if(target.files !== 0) dispatch(startUploadingFiles(target.files))}

  return (
    <Grid container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{mb:1}}
      className = 'animate__animated animte__fadeIn animate__faster'>

        <input
          type= "file"
          ref= {fileInputRef}
          onChange = {onFileInputChange}
          style = {{display:'none'}}
          multiple // The multiple would withdraw to only allow the load of a document
          />
        
        <Grid
          container
          direction= 'row'
          justifyContent='space-between'
          alignItems='center'>
          <Grid item>
            <Typography fontSize={39} fontWeight = 'light'> {dateString} </Typography>
          </Grid>
          
          <Grid item>
            <IconButton
              color="primary.main"
              disabled = {isSaving}
              onClick = { () => fileInputRef.current.click()}
              sx = {{flexGrow: 1}}>
                <UploadFile/>
            </IconButton>
            <Button 
              color= "primary"
              disabled= {isSaving}
              sx= {{padding: 2, flexGrow: 1}}
              onClick = {onSaveNote}>
              <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
              Guardar
            </Button>
          </Grid>
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
