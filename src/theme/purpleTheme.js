import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#5EABA2'
        },
        secondary: {
            main: '#023535'
        },
        button:{
            main: '#AAB535'
        },
        error: {
            main: purple.A400
        }
    }
})