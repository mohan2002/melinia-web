import { Card, CardContent, CardMedia, Grid, Typography, Box, Avatar} from "@mui/material";
import { Container } from "@mui/system";
import { Button } from '@mui/material';
import EastIcon from "@mui/icons-material/East";

const WorkshopCard = ({ title, description, imageUrl }) => {
  return (
    <Container
      sx={{
        background: "white",
        marginTop: "80px",
      }}
      data-aos="fade-right"
      data-aos-delay="100"
    > 
    
      <Card sx={{ height: { xs: "740px", md: "400px",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" } }} elevation="none">
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/workshop.jpeg"
              alt={title}
              width="100%"
              style={{ objectFit: "cover",objectPosition:{xs:"center",md:"left"} }}
              sx={{height:{xs:"250px",md:"100%"}}}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "400px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "revert",
                flexDirection: "column",
              }}
            >
              <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center" mb={2}>
                <Typography letterSpacing={0.6} lineHeight={1.8}
                        sx={{
                          fontSize: { xs: "10px", md: "18px" },
                          color: "grey",
                          fontWeight: "700",
                          marginTop:{xs:"2px",md:"10px"},
                        }}
                      >
                      WORKSHOP
                  </Typography>
                  <Typography 
                        sx={{
                          fontSize: { xs: "10px", md: "14px" },
                          color: "grey",
                          fontWeight: "300",
                          marginTop:"10px",
                        }}
                      >
                      5TH APRIL 10.00 - 11.30 AM
                </Typography>
              </Box>
              <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "28px" }}}>
                THE ENTREPRENEURIAL MINDSET
              </Typography>
              <Typography
                variant="body2"
                component="p"
                mt={3}
                letterSpacing={0.6}
                lineHeight={1.8}
                  sx={{textIndent:"80px"}}
                  color="#6A6A6A"
              >
                Are you an aspiring entrepreneur looking to learn from a successful founder? Join Prashanth Ganesh, founder of PreSkale, and our alumni, for "Revive the Entrepreneur in You", a one-day workshop that will provide you with the tools and resources to launch and grow your own business. Don't miss out on this exciting opportunity to revive the entrepreneur in you!
                </Typography>
                  <Box display="flex" flexDirection="row" justifyContent="space-between"  width="100%" alignItems="center" sx={{ mt: { xs: 3, md: 6}}} >
                          <Box display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" >
                            <Avatar alt="Glen Williams" src="https://media.licdn.com/dms/image/C5603AQEdtdBe-94OxQ/profile-displayphoto-shrink_800_800/0/1659963930067?e=1684368000&v=beta&t=-d66sWFPDnijKu-gbYDUoKqrJyb2PhUVeJGLdidrHnk" />
                            <Typography
                                variant="body2"
                                component="p"
                                // mt={3}
                                letterSpacing={0.6}
                                lineHeight={1.8}
                                color="blue"
                                ml={2}
                              >
                                Prashanth Ganesh
                            </Typography>
                          </Box>
                    <Box display="flex" alignItems="center" >
                        <Button href="/events/workshop" sx={{width: { xs: "120px", md: "200px" },background:"white",color:"secondary",":hover": { background: "white",color:"lightblue" }}}>APPLY NOW<EastIcon sx={{ color:"secondary",width:"15px", ":hover": { background: "white",color:"lightblue" } }} /></Button>
                    </Box>
                  </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default WorkshopCard;