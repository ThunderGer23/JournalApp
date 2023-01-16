import { CircularProgress, Grid, Skeleton } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing= {0}
        direction = 'column'
        alignItems= 'center'
        justifyContent= 'center'
        sx= {{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}>

        {/* <Grid
            container
            direction = 'row'
            justifyContent = 'center'>
                
            <img
                style = {{ width: 163}}
                alt= 'logo athenea'
                src= 'public\img\logo.png'
            />
        </Grid> */}

        <Grid
            container
            direction = 'row'
            justifyContent = 'center'>
                <CircularProgress color='inherit' />
        </Grid>


    </Grid>
  )
}
