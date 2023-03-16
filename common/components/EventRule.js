import { Card, List, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function EventRule() {
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Container>
        <Card
          sx={{
            height: {xs:"auto",md:"250px"},
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #eee",
            boxShadow:
              "box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            flexDirection: { xs: "column", md: "row" },
          }}
          elevation="none"
        >
          <Box
            width={{ xs: "100%", md: "70%" }}
            height={{ xs: "50%", md: "100%" }}
            p={{ xs: 2, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h5" fontWeight="700">
              Rules of the Event
            </Typography>
            <List sx={{ marginTop: "10px" }}>
              <ListItem>
                <Typography color="#6E798C">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="#6E798C">
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="#6E798C">
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box
            width={{ xs: "100%", md: "30%" }}
            height={{ xs: "50%", md: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
            ml={{xs:6,md:4}}
            sx={{
              borderTop: { xs: "1px solid #eee", md: "none" },
              paddingTop: { xs: 2, md: 0 },
              marginTop: { xs: 2, md: 0 },
              borderTopWidth: { md: "1px" },
              borderLeft: { md: "1px solid #eee" },
              paddingLeft: { md: 4 },
              marginBottom:{xs:2,md:0},
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <TimerOutlinedIcon sx={{ color: "#6A6A6A" }} />
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

export default EventRule
