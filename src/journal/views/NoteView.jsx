import { ImageGalery, FilesList } from "../components"
import { Assessment, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { NothingSelectedView } from "./"
export const NoteView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb:1}}>
                {/* <NothingSelectedView /> */}
            <ImageGalery />
    </Grid>
  )
}
