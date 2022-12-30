import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Button} from '@mui/material';
import {Description } from '@mui/icons-material';

export const FilesList = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {[1, 2, 3].map((value) => (
            <Button
                color='button'
                fullWidth>
                <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                        <Description />
                    }>
                    <ListItemText primary={`Tesis ${value}`}  secondary="Jan 9, 2014"/>
                </ListItem>
            </Button>
            ))}
    </List>
  )
}