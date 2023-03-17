import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

function Developer2() {
  const icons = [
    {
      icon: <LinkedInIcon sx={{ color: "#0077B5" }} />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <EmailOutlinedIcon sx={{ color: "GrayText" }} />,
      link: "mailto:example@example.com",
    },
    {
      icon: <PhoneCallbackIcon sx={{ color: "green" }} />,
      link: "tel:+1234567890",
    },
    {
      icon: <InstagramIcon sx={{ color: "#833AB4" }} />,
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <Box sx={{ marginTop: "80px", marginBottom: "100px" }}>
      <Card sx={{ height: { xs: "auto", md: "420px" } }} elevation="none">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "400px",
                display: "flex",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "24px", md: "36px" } }}
                component="h1"
                fontWeight="700"
                textAlign="center"
              >
                GUNA BARATHI R
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
                A self-motivated and passionate student, who wishes to have a
                growth-oriented and challenging career, while pushing myself to
                work to the best of my abilities and produce the highest quality
                work that I am capable of. I am looking forward to enhance my
                experience through continuous learning and teamwork. I Would
                love to work on projects based on Web and Mobile App
                Development. My areas of expertise include C++, JavaScript, Java
                and Python.
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
          <Grid item xs={12} md={6}>
            <img
              src="/images/guna1.jpg"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default Developer2;
