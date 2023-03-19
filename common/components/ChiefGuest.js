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
          <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "32px" }}} mb={1} textAlign="center">
            MEET OUR CHIEF GUEST
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign="center">
            We Proudly welcome our chief guest to Melinia 2k23
          </Typography>

          <Avatar src="https://media.licdn.com/dms/image/C4D03AQFyruBk05g-dQ/profile-displayphoto-shrink_800_800/0/1520617607420?e=1684368000&v=beta&t=Tbataps6udlFCD_keiecR6fTlcNiA9u2GAMRJnnxj2E" sx={{width:300,objectFit:"contain",height:300,borderRadius:"100%"}} />

          <Typography mt={4} variant="h6" fontWeight="700">Swaminathan Ganesan</Typography>
          <Typography variant="subtitle2">Co-Founder and CEO at SMARTAIL</Typography>

          <Typography color="#6E798C" textAlign="center" sx={{width:{sm:"80%",md:"70%"}}} mt={2}>We would like to invite Mr Swaminathan Ganesan to our National Level Technical Symposium Melinia 2k23. As a co-founder and CEO in the education sector, your experience with DeepGrade AI and DeepGrade DT would be of great interest to our audience. Thank you for considering our invitation, and we hope to see you soon.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
