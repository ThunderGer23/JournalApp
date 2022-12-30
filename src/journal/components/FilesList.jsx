import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Button} from '@mui/material';
import {Description } from '@mui/icons-material';

export const FilesList = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {[{name: 'material'}, {name: 'mates'}, {name: 'prepa'}].map((value) => (
          <ListItem
            key={value.name}
            disableGutters>
            <Button
                color='button'
                fullWidth>
                  <ListItemAvatar>
                    <Avatar>
                      <Description />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`Tesis ${value.name}`}  secondary="Jan 9, 2014"/>
            </Button>
          </ListItem>
            ))}
    </List>
  )
}