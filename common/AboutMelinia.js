import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const AboutMelinia = ({ title, description, imageUrl }) => {
    return (
      <Container sx={{background:"white",marginTop:"50px",marginBottom:"100px"}} data-aos="fade-right" data-aos-delay="100">
        <Card style={{ height: 420 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/Meliniaimg.png"
              alt={title}
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6} height={420}>
            <CardContent sx={{height:"100%",display:"flex", alignItems:"flex-start", justifyContent:"center",flexDirection:"column"}}>
              <Typography variant="h4" component="h1" fontWeight="700">
                ABOUT MELINIA
              </Typography>
              <Typography variant="body2" component="p" mt={3} letterSpacing={0.5} lineHeight={1.7}>
                The Computing Department's prestigious national level inter-college technical symposium, Melinia, is launching its 3rd edition. It is a celebration of technology, creativity and innovation, attracting students from around the state. It provides a national platform for the students to showcase their talents and motivates through workshops conducted by industrial experts. It also provides an opportunity for the companies to network and engage with the next generation of technology leaders.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      </Container>
    );
  };
  
  export default AboutMelinia;