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
    
      <Card sx={{ height: { xs: "780px", md: "420px",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" } }} elevation="none">
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/workshopimg.png"
              alt={title}
              width="100%"
              style={{ objectFit: "cover" }}
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
                          marginTop:"10px",
                        }}
                      >
                      WORKSHOP
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
                ABOUT THE MELINIA WORKSHOP
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
                  <Box display="flex" flexDirection="row" justifyContent="space-between"  width="100%" alignItems="center" sx={{ mt: { xs: 3, md: 6}}} >
                          <Box display="flex" flexDirection="row" justifyContent='space-between' alignItems="center" sx={{ width: { xs: "49%", md: "28%" }}} >
                            <Avatar alt="Glen Williams" src="/images/Avatar.png" />
                            <Typography
                                variant="body2"
                                component="p"
                                // mt={3}
                                letterSpacing={0.6}
                                lineHeight={1.8}
                                color="blue"
                              >
                                Glenn Williams
                            </Typography>
                          </Box>
                    <Box display="flex" alignItems="center" >
                        <Button sx={{width: { xs: "120px", md: "200px" },background:"white",color:"secondary",":hover": { background: "white",color:"lightblue" }}}>APPLY NOW<EastIcon sx={{ color:"secondary",width:"15px", ":hover": { background: "white",color:"lightblue" } }} /></Button>
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