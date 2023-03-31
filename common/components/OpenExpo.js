import { Card, CardContent, CardMedia, Grid, Typography, Box, Avatar} from "@mui/material";
import { Container } from "@mui/system";
import { Button } from '@mui/material';
import EastIcon from "@mui/icons-material/East";

const OpenExpo = ({ title, description, imageUrl }) => {
  return (
    <Container
      sx={{
        background: "white",
        marginTop: "80px",
      }}
      data-aos="fade-right"
      data-aos-delay="100"
    > 
    
      <Card sx={{ height: "auto",border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px" }} elevation="none">
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="/images/openexpo.png"
              alt={title}
              width="100%"
              style={{ objectFit: "contain",objectPosition:"center" }}
              sx={{height:{xs:"auto",md:"100%"},paddingLeft:{xs:"0px",md:"16px"}}}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "auto",
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
                      EXPO
                  </Typography>
                  <Typography 
                        sx={{
                          fontSize: { xs: "10px", md: "14px" },
                          color: "grey",
                          fontWeight: "300",
                          marginTop:"10px",
                        }}
                      >
                      5TH APRIL
                </Typography>
              </Box>
              <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "28px" }}}>
                OPEN EXPO
              </Typography>
              <Typography
                textAlign="justify"
                variant="body2"
                component="p"
                mt={3}
                letterSpacing={0.6}
                lineHeight={1.8}
                  sx={{textIndent:"80px"}}
                  color="#6A6A6A"
              >
                The students of CIT get to showcase their working model of various real world problems. The onlookers can interact and get insights across latest tech domains such as AI/ML, Cryptography etc
                </Typography>
                  <Box display="flex" flexDirection="row" justifyContent="flex-end"  width="100%" alignItems="flex-end" sx={{ mt: { xs: 3, md: 6}}} >
                    <Box display="flex" alignItems="center" >
                        <Button href="https://forms.gle/5osGmAfwb21eQAxt6" sx={{background:"white",color:"secondary",":hover": { background: "white",color:"lightblue" }}}>REGISTER HERE<EastIcon sx={{ color:"secondary",width:"15px", ":hover": { background: "white",color:"lightblue" } }} /></Button>
                    </Box>
                  </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default OpenExpo;