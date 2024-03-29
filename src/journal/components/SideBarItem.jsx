import { AccountBox, FileCopy, Home, Settings } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({title, body, id, date, imageUrls}) => {

  const newTitle = useMemo(() => title.slice(0.1).concat('...'), [title])
  const dispatch = useDispatch()
  const onClickNote = () => dispatch(setActiveNote({title, body, id, date, imageUrls}))
  return (
    <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
              <FileCopy />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary= {newTitle} />
                <ListItemText secondary= {body} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
