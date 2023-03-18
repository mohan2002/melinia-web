import { Card, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function EventRewards({data}) {
  return (
    <Box sx={{marginTop:"60px"}}>
        <Container sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap",gap:{xs:"20px",md:"0px"}}}>
            {data.prizeamount[0] && 
            <Card sx={{width:{xs:"120px",md:"220px"},height:{xs:"190px",md:"250px"},borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                    <Box height={{xs:"60px",md:"100px"}}>
                        <img src="/images/frstprize.png" style={{height:"100%"}}/>
                    </Box>
                    <Typography>First Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(228, 179, 55, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(232, 174, 26, 1)">{data.prizeamount[0]}</Typography>
                    </Box>
                </Box>
            </Card>}

           {data.prizeamount[1] && <Card sx={{width:{xs:"120px",md:"220px"},height:{xs:"190px",md:"250px"},borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                <Box height={{xs:"60px",md:"100px"}}>
                    <img src="/images/secondprize.png" style={{height:"100%"}}/>
                </Box>
                    <Typography>Second Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(110, 112, 127, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(110, 112, 127, 1)">{data.prizeamount[1]}</Typography>
                    </Box>
                </Box>
            </Card>}

            {data.prizeamount[2] && <Card sx={{width:{xs:"120px",md:"220px"},height:{xs:"190px",md:"250px"},borderRadius:"10px"}}>
                <Box height="60%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1}>
                <Box height={{xs:"60px",md:"100px"}}>
                    <img src="/images/thirdprize.png" style={{height:"100%"}}/>
                    </Box>
                    <Typography>Third Prize</Typography>
                </Box>
                <Box height="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box width="60%" height="35px" bgcolor="rgba(154, 136, 111, 0.1)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" borderRadius="10px">
                        <Typography color="rgba(154, 136, 111, 1)">{data.prizeamount[2]}</Typography>
                    </Box>
                </Box>
            </Card>}
        </Container>
    </Box>
  )
}

export default EventRewards