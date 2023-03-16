import { Card, List, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function EventRule() {
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Container>
        <Card 
            sx={{
            height: "250px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center",
            border: "1px solid #eee",
            boxShadow:
                "box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
            elevation="none"
        >
          <Box width="70%" height="100%" p={4} display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5" fontWeight="700">Rules of the Event</Typography>
            <List sx={{marginTop:"10px"}}>
              <ListItem>
                <Typography color="#6E798C">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="#6E798C">
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="#6E798C">
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box width="30%" height="100%" display="flex" flexDirection="column" justifyContent="center" gap={4}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                <TimerOutlinedIcon sx={{ color: "#6A6A6A" }}/>
                <Typography color="#6E798C">30 mins</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                <CategoryOutlinedIcon sx={{ color: "#6A6A6A" }}/>
                <Typography color="#6E798C">Resources will be Provided</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                <PermIdentityOutlinedIcon sx={{ color: "#6A6A6A" }}/>
                <Typography color="#6E798C">Individual</Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default EventRule;
