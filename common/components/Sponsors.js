import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Sponsors() {
  const sponsors = [
    {
      name: "Smartail",
      logo: "https://smartail.ai/wp-content/uploads/2021/09/Site-Identity-Logo-Smartail.svg",
    },
    {
      name: "Root Quotient",
      logo: "https://rootquotient.com/assets/images/new-home-page/rq-logo-secondary-new.png",
    },
    {
      name: "KLA",
      logo: "/images/klar.png",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "80px",
        height: "100%",
        width: "100%",
        background: "rgba(237, 33, 58, 0.12)",
        padding:"20px"
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="700"
          sx={{ fontSize: { xs: "22px", md: "32px" } }}
          mb={2}
        >
          SPONSORS & CO-SPONSORS
        </Typography>
        <Typography mb={4} variant="body2" component="p" color="#6A6A6A">
          We've had the pleasure to collaborate with a few...
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {sponsors.map((sponsor) => (
            <Grid item key={sponsor.name}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                borderRadius={1}
                bgcolor="background.paper"
                width={{ xs: 150, md: 250 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width="100%"
                  height="80"
                  style={{objectFit:"contain"}}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Sponsors;
