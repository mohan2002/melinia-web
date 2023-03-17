import Developer1 from '@/common/components/Developer1'
import Navbar from '@/common/components/navbar/Navbar'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const cardStyle = {
  display: 'flex',
  maxWidth: '100%',
  height: '100%',
  borderRadius: 0,
};

const mediaStyle = {
  width: '40%',
  height: '100%',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '1.5rem',
};

const nameStyle = {
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

const departmentStyle = {
  fontStyle: 'italic',
  marginBottom: '0.5rem',
};

const contactContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const contactStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '1.5rem',
};

const iconStyle = {
  marginRight: '0.5rem',
};


function developers() {
  return (
    <Box>
      <Navbar bgcolor="#ED213A"/>

      <Typography textAlign="center" mt={10} variant="h4" fontWeight="700">Meet the Developers of the website</Typography>
      
      <Container sx={{marginTop:"30px"}}>
       <Developer1/>
      </Container>
    </Box>
  )
}

export default developers