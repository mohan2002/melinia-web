import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { nontechnicaldata, technicaldata } from "../utils/data";
import EventCard from "./EventCard";

function EventsGrid() {
  const [eventtype, setEventType] = useState("Technical");
  const [cond, setCond] = useState(false);
  const handeleTechnical = () => {
    setEventType("Technical");
  };
  const handleNonTechnical = () => {
    setEventType("Non Technical");
  };

  return (
    <Box
      sx={{
        marginTop: "80px",
        height: "100%",
        width: "100%",
        background: "rgba(237, 33, 58, 0.12)",
        padding: "20px",
      }}
    >
      <Container>
        {/* Events Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "32px" }}}>
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

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {eventtype == "Technical" ? (
            <Grid container spacing={4} mt={4} width="100%" alignItems="center" justifyContent="center">
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="120"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.coolestmelinial} url="/events/technical/coolestmelinial"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="120"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.gameofcodes} url="/events/technical/gameofcodes"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="140"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.hogwartscodequest} url="/events/technical/hogwartscodequest"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="160"
                sx={{ display: { xs: cond ? "block" : "none", md: "block" } }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.innovationodyssey} url="/events/technical/innovationodyssey"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="180"
                sx={{ display: { xs: cond ? "block" : "none", md: "block" } }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.tellatale} url="/events/technical/tellatale"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="200"
                sx={{ display: { xs: cond ? "block" : "none", md: "block" } }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={technicaldata.uiunleashed} url="/events/technical/uiunleashed"/>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={4} mt={4} width="100%" alignItems="center" justifyContent="center">
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="120"
                sx={{ display: { xs: cond ? "block" : "none", md: "block" } }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={nontechnicaldata.triathlon} url="/events/nontechnical/triathlon"/>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-right"
                data-aos-delay="120"
                sx={{ display: { xs: cond ? "block" : "none", md: "block" } }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                <EventCard event={nontechnicaldata["221bpuzzlehunt"]} url="/events/nontechnical/221bpuzzlehunt"/>
              </Grid>

            </Grid>
          )}
        </Box>

        <Box
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ display: { xs: cond ? "none" : "flex", md: "none" } }}
        >
          <Button
            sx={{
              background: "#ED213A",
              color: "white",
              ":hover": { background: "#ED213A" },
            }}
            onClick={() => {
              setCond(true);
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default EventsGrid;
