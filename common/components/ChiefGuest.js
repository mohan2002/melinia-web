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
            We are glad to have Mr Swaminathan Ganesan..
          </Typography>

          <Avatar src="https://media.licdn.com/dms/image/C4D03AQFyruBk05g-dQ/profile-displayphoto-shrink_800_800/0/1520617607420?e=1684368000&v=beta&t=Tbataps6udlFCD_keiecR6fTlcNiA9u2GAMRJnnxj2E" sx={{width:300,objectFit:"contain",height:300,borderRadius:"100%"}} />

          <Typography mt={4} variant="h6" fontWeight="700">Mr. Swaminathan Ganesan</Typography>
          <Typography variant="subtitle2">Co-Founder and CEO of SMARTAIL</Typography>

          <Typography color="#6E798C" textAlign="center" sx={{width:{sm:"80%",md:"70%"}}} mt={2}>Mr. Ganesan will be joining us as Chief Guest for our National Level Technical Symposium Melinia 2k23 . He has been instrumental in revolutionizing the education industry through the integration of cutting-edge technology. His expertise and knowledge in the field of AI and DT have been widely recognized, and we are honored to have him to grace our event as Chief Guest.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
