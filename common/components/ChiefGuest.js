import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function ChiefGuest() {
  return (
    <Box sx={{ marginTop: "60px",height:"100%",width:"100%", background:"rgba(237, 33, 58, 0.12)",padding:"20px"  }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h4" fontWeight="700" mb={1} textAlign="center">
            MEET OUR CHIEF GUEST
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign="center">
            We Proudly welcome our chief guest to Melinia 2k23
          </Typography>

          <Avatar src="https://media.licdn.com/dms/image/C4E03AQHi40Xr3Q6m7w/profile-displayphoto-shrink_800_800/0/1528135383615?e=1684368000&v=beta&t=ynL6NeMJBWCg4SxOJ5cZoRHwpFYJONjL2LXrxDAGQ_c" sx={{width:300,objectFit:"contain",height:300,borderRadius:"100%"}} />

          <Typography mt={4} variant="h6" fontWeight="700">Kannan Ganesan</Typography>
          <Typography variant="subtitle2">Chief Technology Officer at SMARTAIL</Typography>

          <Typography color="#6E798C" textAlign="center" sx={{width:{sm:"80%",md:"70%"}}} mt={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
