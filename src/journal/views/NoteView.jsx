import { ImageGalery, FilesList } from "../components"
import { Assessment, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
export const NoteView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb:1}}>
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight='blod'> Nombre del vato UwUr</Typography>
            </Grid>
            <Grid item>
                <Button
                    color= 'button'
                    sx={{padding: 2}}>
                    <Assessment
                        sx={{ fontSize: 30, mr: 1}}/>
                        Evaluar
                </Button>
            </Grid>
            <Grid container>
                {/* <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa un titulo"
                    label ="Esto debería ser un button para cargar el archivo"
                    sx={{border: 'none', mb:1}}/>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedio hoy"
                    label ="Descripción"
                    minRows={5}
                    sx={{border: 'none', mb:1}}/> */}
                <Typography
                    fontSize={25}
                    fontWeight='light'> Recent</Typography>
                <FilesList  fullWidth/>
            </Grid>

            {/* Aquí podríamos dejar como una lista de los archivos recientes pero me estoy proyectando mucho */}
            {/* <ImageGalery /> */}
    </Grid>
  )
}
