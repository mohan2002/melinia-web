import { Button, Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import SellIcon from "@mui/icons-material/Sell";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function EventDetailsCard({data}) {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Container>
        <Card
          sx={{
            height: {xs:"auto",md:"300px"},
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #eee",
            boxShadow:
              "box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
          }}
          elevation="none"
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: {xs:"column",md:"row"},
              alignItems: "center",
              height:"85%"
            }}
          >
            <Box width="30%" sx={{height:{xs:"150px",md:"240px"},width:{xs:"400px"}}}>
              <img
                src="/images/sample2.png"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>

            <Grid container spacing={{xs:2,md:4}} p={{xs:2,md:0}} sx={{ marginLeft: "30px" }}>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <LocationOnIcon
                  color="#6E798C"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>{data.location}</Typography>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <AccessAlarmsIcon
                  fontSize="medium"
                  color="#6E798C"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>{data.time}</Typography>

              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <CalendarMonthIcon
                  fontSize="medium"
                  color="#6E798C"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>{data.date}</Typography>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <PhoneCallbackIcon
                  fontSize="medium"
                  color="#6E798C"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>{data.contactno}</Typography>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <SellIcon
                  color="#6E798C"
                  fontSize="medium"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>{data.registrationamt}</Typography>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  gap:{xs:"6px",md:"10px"}
                }}
              >
                <EventBusyIcon
                  color="#6E798C"
                  fontSize="medium"
                  sx={{ color: "#6A6A6A",fontSize:{xs:"24px",md:"32px"}}}
                />
                <Typography color="#6E798C" sx={{fontSize:{xs:"14px",md:"16px"}}}>Deadline: {data.deadlinereg}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box width="100%" height="15%" display="flex" alignItems="flex-start" justifyContent="flex-end" pr={2}>
            <Button href={data.eventlink}>Apply Event
                <ArrowForwardIcon  sx={{fontSize:"18px",marginLeft:"2px"}}/>
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default EventDetailsCard;
