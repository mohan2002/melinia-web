import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

function Developer1() {
  const icons = [
    { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/mohan-prasaath-2015651b8/" },
    { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:mohanprasaath269@gmail.com" },
    { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 9842258390" },
    { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/mohan._.17" },
  ];
  return (
    <Box sx={{ marginTop: "80px", marginBottom:"100px" }}>
      <Card sx={{ height: { xs: "auto", md: "420px" } }} elevation="none">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="/images/mohan.jpg"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "auto",
                display: "flex",
                alignItems: {xs:"center",md:"flex-start"},
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" sx={{fontSize:{xs:"24px",md:"36px"}}} component="h1" fontWeight="700" textAlign='center'>
                MOHAN PRASAATH S
              </Typography>
              <Typography mb={4} color="#6A6A6A" textAlign="center">
                Msc Software Systems - 4th Year
              </Typography>
              <Typography
                variant="body2"
                component="p"
                mt={1}
                letterSpacing={0.6}
                lineHeight={1.8}
                sx={{ textIndent: "50px" }}
              >
                As someone who loves to explore and learn, I'm always searching
                for new opportunities to challenge myself and grow. I thrive in
                dynamic and fast-paced environments, and I'm not afraid to take
                risks. I'm passionate about making a meaningful impact in my
                field, and I'm excited to connect with like-minded professionals
                to discover new possibilities and create something extraordinary
                together.
              </Typography>
              <Box mt={2}>
                {icons.map(({ icon, link }) => (
                  <IconButton key={link} href={link} target="_blank">
                    {icon}
                  </IconButton>
                ))}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default Developer1;
