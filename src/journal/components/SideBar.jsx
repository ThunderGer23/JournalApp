import { AccountBox, FileCopy, Home, Settings, TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"


export const SideBar = ({drawerWidth = 120}) => {
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
                        {
                            ['Home', 'Perfil', 'My Documents', 'Configuration'].map( text => (
                                <ListItem
                                    key= {text}
                                    disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {(text === 'Home')?
                                                    <Home />:
                                                    (text === 'Perfil')?
                                                    <AccountBox />:
                                                    (text === 'My Documents')?
                                                    <FileCopy />:
                                                    <Settings />
                                                    }{'  '+text}
                                            </ListItemIcon>
                                        </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
            </Drawer>
    </Box>
  )
}
