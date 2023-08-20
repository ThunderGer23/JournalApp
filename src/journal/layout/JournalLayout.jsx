import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components/"

const drawerWidth = 200

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* {navbar} */}
        <NavBar drawerWidth={drawerWidth}/>
        {/* {sidebar} */}
        <SideBar drawerWidth={drawerWidth}/>
        <Box 
            component='main'
            sx={{flexGrow: 1, p:3}}
        >
        <Toolbar />

            {children}

        </Box>
    </Box>
  )
}
