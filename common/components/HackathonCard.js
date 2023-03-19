import { Card, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material";
import { Button } from '@mui/material';
import { Container } from "@mui/system";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/router";




const HackathonCard = ({ title, description, imageUrl }) => {
  const router = useRouter()
  return (
    <Container
      sx={{
        background: "white",
        marginTop: "80px",
      }}
      data-aos="fade-right"
      data-aos-delay="100"
    > 
    
      <Card sx={{ height: { xs: "760px", md: "400px",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" } }} elevation="none">
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
                            fontSize: { xs: "10px", md: "14px" },
                            color: "grey",
                            fontWeight: "300",
                            marginTop:"10px",
                          }}
                        >
                        27th – 28th March(Round 1) & 1st April(Round 2)
                  </Typography>
                </Box>
                <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "28px" }}}>
                  ABOUT THE MELINIA HACKATHON
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
                  Being one of the flagship events of Melinia, Hackathon aims to bring out the brainstorming skills and team’s coordination in the participants. The outcomes expected are viable and feasible product prototypes that will enhance the lifestyles of students, professors and improve the working standard of institutions in general.
                </Typography>
                      <Box display="flex" flexDirection="row" justifyContent='flex-start' width="100%" sx={{ mt: { xs: 3, md: 6}}} >
                          <Button sx={{width:"150px",background:"white",color:"secondary",":hover": { background: "white",color:"lightblue" }}} onClick={() => {
                            router.push("/events/hackathon")
                          }}>APPLY NOW<EastIcon sx={{ color:"secondary",width:"15px", ":hover": { background: "white",color:"lightblue" } }} /></Button>
                      </Box>
              </CardContent>
            </Grid>
          
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image="https://firebasestorage.googleapis.com/v0/b/melinia2k23.appspot.com/o/Final%20Event%20Images%2FHackathon.jpg?alt=media&token=81a336a2-af2b-4999-940d-00ce29662308"
                alt={title}
                width="100%"
                style={{ objectFit: "cover",objectPosition:{xs:"center",md:"left"} }}
                sx={{height:{xs:"300px",md:"100%"}}}
              />
            </Grid>
          
        </Grid>
      </Card>
    </Container>
  );
};

export default HackathonCard;