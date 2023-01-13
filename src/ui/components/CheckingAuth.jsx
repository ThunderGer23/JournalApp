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

        <Grid
            item
            direction = 'row'
            justifyContent = 'center'>
                <Skeleton variant="circular" width={140} height={140}>
                    <img
                        style = {{ width: 210, height: 118 }}
                        alt= 'logo athenea'
                        src= 'https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr'
                    />
                </Skeleton>
                    <CircularProgress color='inherit' />
        </Grid>

    </Grid>
  )
}
