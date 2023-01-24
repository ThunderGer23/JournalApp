import { Grid, Typography } from "@mui/material"

/* It's exporting a function called AuthLayout. The function takes in two parameters: children and
title. The children parameter is the content that's going to be rendered inside the AuthLayout
component. The title parameter is the title of the AuthLayout component. */
export const AuthLayout = ({children, title = ''}) => {
  /* Returning a grid component with the following properties:
  container: a container is a component that's used to contain other components.
  spacing: spacing is the amount of space between the components.
  direction: direction is the direction of the components.
  alignItems: alignItems is the alignment of the components.
  justifyContent: justifyContent is the justification of the components.
  sx: sx is the style of the components. */
  return (
    <Grid
    container
    spacing={0}
    direction ="column"
    alignItems="center"
    justifyContent = "center"
    sx={{minHeight: "100vh", minWidth: "100vw", backgroundColor: 'primary.main', padding: 4}}>
      <Grid item
        className="box-shadow"
        xs= {3}
        sx= {{backgroundColor: 'white', padding: 3, borderRadius: 2}}>
          <Typography variant = 'h5' sx={{mb:1}}>{title}</Typography>
            {children}
       </Grid>
    </Grid>
  )
}
