import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid 
        container
        spacing={0}
        direction= 'column'
        alignItems = 'center'
        justifyContent= 'center'
        sx={{minHeight: 'calc(100vh-100px)', backgroundColor: 'primary.main', borderRadius: 1}}>

        <Grid
            item
            xs= {12}>
                <StarOutline sx={{ fontSize: 100, color: 'secondary.main'}}/>

        </Grid>
        <Grid
            item
            xs= {12}>
                <Typography>Selecciona una entrada</Typography>

        </Grid>
    </Grid>
  )
}
