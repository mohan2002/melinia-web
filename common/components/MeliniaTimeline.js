import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function MeliniaTimeline() {
  return (
    <Box maxWidth="md" mx="auto" sx={{marginTop:"80px"}}>
      <Typography variant="h4" fontWeight="700" textAlign="center" mb={4}>MELINIA DAY</Typography>
      <Timeline position="alternate" sx={{ width: "100%" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Ceremony
            </Typography>
            <Typography>Melinia Day starts</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" >
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Datathon
            </Typography>
            <Typography>A Technical event related to Data science</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" >
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              UI/UX
            </Typography>
            <Typography>A Technical event related to designing</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
            >
                12:00 am
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Jumbled Code
            </Typography>
            <Typography>A Non Technical Event related to Lorem</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
            >
                12:15 pm
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"40px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Inspector Gadget
            </Typography>
            <Typography>A Non Technical Event that is fun and yet more interesting</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"40px"}} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              End of the day.
            </Typography>
            <Typography>Melinia Day ends with Prize distribution at Auditorium!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
