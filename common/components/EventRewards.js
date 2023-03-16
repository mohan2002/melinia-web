import { Card, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function EventRewards() {
  return (
    <Box sx={{marginTop:"60px"}}>
        <Container sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Card sx={{width:"220px",height:"250px",borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                    <img src="/images/frstprize.png" style={{height:"100px"}}/>
                    <Typography>First Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(228, 179, 55, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(232, 174, 26, 1)">₹1500</Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{width:"220px",height:"250px",borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                    <img src="/images/secondprize.png" style={{height:"100px"}}/>
                    <Typography>Second Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(110, 112, 127, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(110, 112, 127, 1)">₹1000</Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{width:"220px",height:"250px",borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                    <img src="/images/thirdprize.png" style={{height:"100px"}}/>
                    <Typography>Third Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(154, 136, 111, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(154, 136, 111, 1)">₹500</Typography>
                    </Box>
                </Box>
            </Card>
        </Container>
    </Box>
  )
}

export default EventRewards