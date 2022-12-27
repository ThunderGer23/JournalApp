import { Box } from "@mui/system"

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* {navbar} */}

        {/* {sidebar} */}
        
        <Box 
            component='main'
            sx={{flexGrow: 1, p:3}}
        >
            {children}

        </Box>
    </Box>
  )
}
