import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EventCard from "./EventCard";

function EventsGrid() {
  const [eventtype, setEventType] = useState("Technical");
  const [cond,setCond] = useState(false)
  const handeleTechnical = () => {
    setEventType("Technical");
  };
  const handleNonTechnical = () => {
    setEventType("Non Technical");
  };
  return (
    <Box sx={{ marginTop: "80px",height:"100%",width:"100%", background:"rgba(237, 33, 58, 0.12)",padding:"20px" }}>
      <Container>
        {/* Events Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{flexDirection:{xs:"column",md:"row"}}}
        >
          <Typography component="h2" variant="h4" fontWeight="600">
            EVENTS
          </Typography>
          <Box display="flex" flexDirection="row" gap={2} mt={2}>
            <Button
              variant={eventtype == "Technical" ? "contained" : "outlined"}
              sx={
                eventtype == "Technical"
                  ? {
                      background: "#ED213A",
                      ":hover": { background: "#ED213A" },
                    }
                  : { borderColor: "#ED213A", color: "#ED213A" }
              }
              onClick={handeleTechnical}
            >
              Technical
            </Button>
            <Button
              variant={eventtype == "Non Technical" ? "contained" : "outlined"}
              sx={
                eventtype == "Non Technical"
                  ? {
                      background: "#ED213A",
                      color: "white",
                      ":hover": { background: "#ED213A" },
                    }
                  : { borderColor: "#ED213A", color: "#ED213A" }
              }
              onClick={handleNonTechnical}
            >
              Non Technical
            </Button>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" width="100%">
        <Grid container spacing={4} mt={4} width="100%" >
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="120" display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="120" display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="140" display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="160" sx={{display:{xs:cond?"block":"none",md:"block"}}} display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="180" sx={{display:{xs:cond?"block":"none",md:"block"}}} display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="200" sx={{display:{xs:cond?"block":"none",md:"block"}}} display="flex" alignItems="center" justifyContent="center" width="100%">
            <EventCard />
          </Grid>
        </Grid>

        </Box>

    
        <Box mt={2} display="flex" alignItems="center" justifyContent="center" sx={{display:{xs:"flex",md:"none"}}}>
         <Button sx={{background:"#ED213A",color:"white",":hover": { background: "#ED213A" }}} onClick={() => {setCond(true)}}>Load More</Button>
        </Box>

      </Container>
    </Box>
  );
}

export default EventsGrid;
