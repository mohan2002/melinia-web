import { Card, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SellIcon from '@mui/icons-material/Sell';
import EventBusyIcon from '@mui/icons-material/EventBusy';

function EventDetailsCard() {
  return (
    <Box sx={{marginTop:"40px"}}>
        <Container>
            <Card sx={{height:"300px",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}} elevation="none">
                <Box width="30%">
                    <img src="/images/sample2.png" style={{height:"260px",width:"100%", objectFit:"contain"}}/>
                </Box>

                <Grid container spacing={4} sx={{marginLeft:"20px"}}>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <LocationOnIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">COMPUTING BLOCK, CM101</Typography>
                    </Grid>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <AccessAlarmsIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">5TH APRIL, 2023</Typography>
                    </Grid>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <CalendarMonthIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">12.30 PM</Typography>
                    </Grid>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <PhoneCallbackIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">+91 9842258390</Typography>
                    </Grid>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <SellIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">RS 500</Typography>
                    </Grid>
                    <Grid item md={6} xs={4} display="flex" alignItems="center" flexDirection="row" gap={2}>
                        <EventBusyIcon fontSize="large" color="#6E798C" sx={{color:"#6A6A6A"}}/>
                        <Typography color="#6E798C">Deadline: 2ND APRIL</Typography>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    </Box>
  )
}

export default EventDetailsCard