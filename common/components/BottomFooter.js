import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BottomFooter() {
  return (
    <Box width="100%" height="60px" bgcolor="#ED213A" display="flex" alignItems="center" justifyContent="center" mt={10}>
        <Button>
            <Typography color="white" sx={{":hover":{textDecoration:"underline"},cursor:"pointer"}} fontSize="13px">Meet our Developers from Msc Software Systems!</Typography>
            <ArrowForwardIcon  sx={{fontSize:"18px",marginLeft:"4px",color:"white"}}/>
        </Button>
    </Box>
  )
}

export default BottomFooter