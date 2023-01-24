import { AccountBox, FileCopy, Home, Settings } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const SideBarItem = ({note}) => {
  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
              {(note.title === 'Home')?
                  <Home />:
                  (note.title === 'Perfil')?
                  <AccountBox />:
                  (note.title === 'Documents')?
                  <FileCopy />:
                  <Settings />
                  }{'  '+note.title}
            </ListItemIcon>
            <Grid container>
                <ListItemText primary= {note.title} />
                <ListItemText secondary= {note.date} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
