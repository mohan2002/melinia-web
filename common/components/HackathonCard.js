import { Card, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material";
import { Button } from '@mui/material';
import { Container } from "@mui/system";
import EastIcon from "@mui/icons-material/East";




const HackathonCard = ({ title, description, imageUrl }) => {
  return (
    <Container
      sx={{
        background: "white",
        marginTop: "80px",
      }}
      data-aos="fade-right"
      data-aos-delay="100"
    > 
    
      <Card sx={{ height: { xs: "760px", md: "420px",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" } }} elevation="none">
        <Grid container spacing={4} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
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
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center" mb={2}>
                  <Typography letterSpacing={0.6} lineHeight={1.8}
                          sx={{
                            fontSize: { xs: "10px", md: "18px" },
                            color: "grey",
                            fontWeight: "700",
                            marginTop:"10px",
                          }}
                        >
                        HACKATHON
                    </Typography>
                    <Typography 
                          sx={{
                            fontSize: { xs: "10px", md: "16px" },
                            color: "grey",
                            fontWeight: "300",
                            marginTop:"10px",
                            
                          }}
                        >
                        5TH APRIL
                  </Typography>
                </Box>
                <Typography variant="h4" component="h1" fontWeight="900" sx={{ fontSize: { xs: "22px", md: "27px" }}}>
                  ABOUT THE MELINIA HACKATHON
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  mt={3}
                  letterSpacing={0.6}
                  lineHeight={1.8}
                >
                  There have been people willing to predict the future of technology ever since the first technologies were developed. 
                  Hackathons are where our crazy ideas become reality. 
                  Here we come up with a hack to ascertain the intellect of individuals. 
                  We work with new media and interactive technologies, things like AI/ML, Get ready to witness machine intelligence and Internet of Things in working out real time concerns with a feasible approach.
                </Typography>
                      <Box display="flex" flexDirection="row" justifyContent='flex-start' width="100%" sx={{ mt: { xs: 3, md: 6},mb:{xs:4,md:0}}} >
                          <Button sx={{width:"150px",background:"white",color:"secondary",":hover": { background: "white",color:"lightblue" }}}>APPLY NOW<EastIcon sx={{ color:"secondary",width:"15px", ":hover": { background: "white",color:"lightblue" } }} /></Button>
                      </Box>
              </CardContent>
            </Grid>
          
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image="/images/hackathonimg.png"
                alt={title}
                width="100%"
                style={{ objectFit: "cover" }}
                sx={{height:{xs:"300px",md:"100%"}}}
              />
            </Grid>
          
        </Grid>
      </Card>
    </Container>
  );
};

export default HackathonCard;