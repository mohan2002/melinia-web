import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function EventBanner() {
  return (
    <Box display="flex" height="90%" alignItems="center" bgcolor="rgba(237, 33, 58, 0.12);">
      <Container>
        <Box>
          <Typography variant="h3" fontWeight="600">
            HACKATHON
          </Typography>
          <Typography
            variant="caption"
            fontWeight="400"
            color="#6A6A6A"
            ml={0.4}
          >
            Flagship Technical Event
          </Typography>
        </Box>
        <Box
          mt={4}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={5}
        >
          <Box>
            <img src="/images/sample1.png" style={{ height: "400px" }} />
          </Box>
          <Box width="50%">
            <Typography
              sx={{ textIndent: "80px" }}
              lineHeight={1.6}
              letterSpacing={1.1}
              color="#6A6A6A"
            >
              Greetings Hackers! Ever wished for a platform that recognised your ideas and concepts in visualising a solution to real-world problems? You've come to the right place. This Hackathon puts forth an interesting set of themes to choose from. All you have to do is form a team, present your ideas, and finally build a prototype. Get a high chance of winning the Hackathon. Go ahead participate.
            </Typography>

            <Box display="flex" width="100%" alignItems="flex-end" mt={2}>
            <Button
              sx={{
                marginTop: "20px",
                background: "#ED213A",
                color: "white",
                ":hover": { background: "#ED213A" },
              }}
              variant="contained"
            >
              Apply Event
            </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default EventBanner;
