import BottomFooter from '@/common/components/BottomFooter'
import CommitteeProfileCard from '@/common/components/CommitteeProfileCard'
import Navbar from '@/common/components/navbar/Navbar'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function committee() {
  return (
    <Box >
      <Navbar bgcolor="#ED213A"/>
      <Container sx={{display:"flex",marginTop:"80px",xflexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:"20px"}}>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
        <CommitteeProfileCard/>
      </Container>

      <BottomFooter/>
    </Box>
  )
}

export default committee