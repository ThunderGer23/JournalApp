import { AccountBox, FileCopy, Home, Settings, TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const SideBar = ({drawerWidth = 120}) => {
    const {displayName} = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer
                variant='permanent'
                open
                sx= {{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
                }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component='div'>
                                Athena
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {notes.map( note => (
                            <SideBarItem key= {note.id} note = {note}/>
                        ))}
                    </List>
            </Drawer>
    </Box>
  )
}
