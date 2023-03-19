import { Button, Card, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function QueryCard() {

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 700,
      behavior: 'smooth'
    });
  };
  return (
    <Box sx={{marginTop:{xs:"60px",md:"200px"}}} >
        <Box width="100%" sx={{height:"220px",background:"#ED213A",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Container sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Box sx={{display:{xs:"none",md:"block"}}}>
                    <img src="/images/contact.png" style={{objectFit:"contain",marginTop:"-82px"}}/>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                    <Box height="100%" display="flex" flexDirection="column" gap={2} sx={{justifyContent:{xs:"center",md:"flex-start"},alignItems:{xs:"center",md:"flex-start"}}}>
                        <Typography color="white" variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "32px" }}}>QUERIES ON EVENTS</Typography>
                        <Typography color="white" textAlign="center">Feel free to reach out us if you’ve any queries regarding Melinia 2k23</Typography>
                        <Button onClick={handleClick} variant="contained" sx={{width:"200px",background:"white",color:"#ED213A",":hover": { background: "#ED213A",color:"white" },borderRadius:"20px"}}>Contact Us</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    </Box>
  )
}

export default QueryCard