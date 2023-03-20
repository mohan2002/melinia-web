import { Container, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React from "react";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75%",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "48px", md: "100px" },
          color: "white",
          fontWeight: "700",
        }}
      >
        MELINIA 2K23
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "14px", md: "24px" },
          color: "white",
          fontWeight: "300",
          textAlign:"center"
        }}
      >
        A NATIONAL LEVEL TECHNICAL SYMPOSIUM
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "10px", md: "14px" },
          color: "white",
          fontWeight: "300",
          marginTop:"10px",
          textAlign:"center",
        }}
      >
        Proudly organized and presented by 
        
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", md: "14px" },
          color: "white",
          fontWeight: "300",
          marginTop:"10px",
          textAlign:"center",
          width:{xs:"auto",md:"50%"}
        }}
      >
        Department of Computing (MSc Software Systems, Data Science, Decision and Computing Sciences, Artificial Intelligence and Machine Learning)
      </Typography>
      <Box sx={{height:{xs:"60px",md:"110px"}}}>
      <img src="/images/citlogo.png" alt="logo" style={{height:"100%",marginTop:"10px"}}/>

      </Box>
    </Container>
  );
}

export default Banner;
