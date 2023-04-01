import { Box, Card, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


const AboutMelinia = ({ title, description, imageUrl }) => {
  const icons = [
    { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:melinia2023@gmail.com",message:"Send Email" },
    { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 63814 78010",message:"Call Now"},
    { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/melinia.cit/" ,message:"Instagram"},
    { icon: <YouTubeIcon sx={{color:"#FF0000",fontSize:"28px"}}/>, link: "https://www.youtube.com/channel/UCcPOe-UsaVlgy5H6ighVDNA",message:"Youtube" },
    { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/melinia-cit-91810926b/",message:"LinkedIn" },
    { icon: <PhoneIphoneIcon sx={{color:"#6A6A6A"}}/>, link: "https://bit.ly/melinia2k23",message:"Download App" },
  ];
  return (
    <Container
      sx={{
        background: "white",
        marginTop: "80px",
      }}
      data-aos="fade-right"
      data-aos-delay="100"
    > 
    
      <Card sx={{ height: { xs: "auto", md: "420px",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" } }} elevation="none">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/melinia.jpg"
              alt={title}
              width="100%"
              style={{ objectFit: "cover",objectPosition:"center" }}
              sx={{height:{xs:"250px",md:"100%"}}}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "400px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "32px" }}} >
                ABOUT MELINIA
              </Typography>
              <Typography
                variant="body2"
                component="p"
                mt={3}
                letterSpacing={0.6}
                lineHeight={1.8}
                color="#6A6A6A"
                textAlign="justify"
              >
                The Department of Computing organizes a National level
                inter-college technical symposium <span style={{fontWeight:"700",fontStyle:"italic"}}>"Melinia"</span>. It is a celebration of technology, creativity and
                innovation, attracting students from around the state. It
                provides a national platform for the students to showcase their
                talents and motivates through workshops conducted by industrial
                experts. It also provides an opportunity for the companies to
                network and engage with the next generation of technology
                leaders.
              </Typography>
              <Box mt={2}>
                {icons.map(({ icon, link, message }) => (
                 <Tooltip title={message}>
                   <IconButton key={link} href={link} target="_blank">
                    {icon}
                  </IconButton>
                 </Tooltip>
                ))}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default AboutMelinia;
