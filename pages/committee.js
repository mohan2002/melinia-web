import BottomFooter from '@/common/components/BottomFooter'
import CommitteeProfileCard from '@/common/components/CommitteeProfileCard'
import Navbar from '@/common/components/navbar/Navbar'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function committee() {
  return (
    <Box>
      <Navbar bgcolor="#ED213A"/>
      <Container sx={{display:"flex",marginTop:"80px",xflexDirection:"column",flexWrap:"wrap",justifyContent:"space-between",gap:"30px",alignItems:"center"}}>
        {/* <Box width="100%" display="flex" alignItems="center" justifyContent="center" mb={4}>
          <Typography variant="h4" sx={{fontSize:{xs:"26px",md:"36px"}}} fontWeight="700">MELINIA TEAM</Typography>
        </Box> */}
        <Box width="100%" display="flex" alignItems="center" justifyContent="center">
          <CommitteeProfileCard img="/images/stanleys.jpg" name="Dr.C.Stanly Felix" position="Faculty Advisor" designation="Department of Computing" phone="0422-2574071 Extn: 335" mail="stanlyfelix@cit.edu.in"/>
        </Box>
        <Box width="100%"  display="flex" flexDirection={{xs:"column",md:"row"}}  alignItems="center" justifyContent="space-around" gap={4}>
          <CommitteeProfileCard img="/images/keerthikamamupdated.jpg" name="Dr.V.Keerthika" position="Event Management" designation="Department of Computing" phone="0422-2574071 Extn: 335" mail="vkeerthika@cit.edu.in"/>
          <CommitteeProfileCard img="/images/manjumam.jpeg" name="Dr.D.Manju" position="Event management " designation="Department of Computing" phone="0422-2574071 Extn: 335" mail="manju@cit.edu.in"/>
          <CommitteeProfileCard img="/images/sujithramam.jpeg" name="Dr.M.Sujithra" position="Technical Event Management" designation="Department of Computing" phone="0422-2574071 Extn: 335" mail="sujithra@cit.edu.in"/>
          <CommitteeProfileCard img="/images/hemashreemam.jpeg" name="Mrs.P Hemashree" position="Non-Technical Event Management" designation="Department of Computing" phone="0422-2574071 Extn: 335" mail="hemashree@cit.edu.in"/>
        </Box>
        <Box width="100%" display="flex" alignItems="center" justifyContent="center" my={3}>
          <Typography variant="h4" sx={{fontSize:{xs:"24px",md:"30px"}}} fontWeight="700">OFFICE BEARERS</Typography>
        </Box>
        <Box width="100%"  display="flex" flexDirection={{xs:"column",md:"row"}}  alignItems="center" justifyContent="space-around" gap={4}>
          <CommitteeProfileCard img="/images/dd.jpeg" name="J Danesh Dheerthan" position="Chairman" designation="MSc Decision and Computing Sciences" phone="9842398623" mail="1933005mdcs@cit.edu.in"/>
          <CommitteeProfileCard img="/images/harsith.jpg" name="S Harshith" position="Vice Chairman" designation="MSc Software Systems" phone="6381478010" mail="1931010mss@cit.edu"/>
        </Box>
        <Box width="100%"  display="flex" flexDirection={{xs:"column",md:"row"}} alignItems="center" justifyContent="space-around" gap={4}>
          <CommitteeProfileCard img="/images/haritha.jpg" name="Shri Haritha" position="Secretary" designation="MSc Software Systems" phone="9843209778" mail="1931039mss@cit.edu.in"/>
          <CommitteeProfileCard img="/images/laksay.png" name="Lakshya Karwa" position="Joint Secretary" designation="MSc Aritificial Intelligence and Machine Learning"  phone="7877776552" mail="1934021aiml@cit.edu.in"/>
        </Box>
        <Box width="100%"  display="flex" alignItems="center" justifyContent="center">
         <CommitteeProfileCard img="/images/shre.jpg" name="Shree Varshini R P" position="Treasurer" designation="MSc Data Science" phone="9360327752" mail="1932046mds@cit.edu.in"/>
        </Box>
        <Box width="100%"  display="flex" flexDirection={{xs:"column",md:"row"}} alignItems="center" justifyContent="space-around" gap={4}>
          <CommitteeProfileCard img="/images/jothi.jpeg" name="Jothi Bathra L" position="Student Coordinator" designation="MSc Decision and Computing Sciences" phone="9361229447" mail="1933018mdcs@cit.edu.in"/>
          <CommitteeProfileCard img="/images/mahi.jpeg" name="Mahi Anand V" position="Student Coordinator" designation="MSc Data Science" phone="9566977941" mail="1932023mds@cit.edu.in"/>
          <CommitteeProfileCard img="/images/Rhithika.jpg" name="Rhithika Sree K S" position="Student Coordinator" designation="MSc Aritificial Intelligence and Machine Learning" phone="9080785254" mail="1934031aiml@cit.edu.in"/>
        </Box>
      </Container>

      <BottomFooter/>
    </Box>
  )
}

export default committee