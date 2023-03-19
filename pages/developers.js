import Developer1 from '@/common/components/Developer1'
import Developer2 from '@/common/components/Developer2'
import Navbar from '@/common/components/navbar/Navbar'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


function developers() {
  return (
    <Box>
      <Navbar bgcolor="#ED213A"/>

      <Typography textAlign="center" mt={10} variant="h4" fontWeight="700">WEB DEVELOPERS</Typography>
      
      <Container sx={{marginTop:"30px"}}>
       <Developer1/>
       <Developer2/>
      </Container>
    </Box>
  )
}

export default developers