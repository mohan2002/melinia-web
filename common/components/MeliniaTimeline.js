import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LightModeIcon from '@mui/icons-material/LightMode';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MeliniaTimeline() {
  return (
    <Box maxWidth="md" mx="auto" sx={{marginTop:"80px"}} data-aos="fade-right" data-aos-delay="120">
      <Typography variant="h4" component="h1" fontWeight="700" sx={{ fontSize: { xs: "22px", md: "32px" }}} textAlign="center" mb={4}>MELINIA DAY</Typography>
      <Timeline position="alternate" sx={{ width: "100%" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9.00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="secondary">
              <AlarmOnIcon/>
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
              Inaugration ceremony
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>Melinia Day starts</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am - 10.30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <SkipPreviousIcon />
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
              <a href="/events/workshop" style={{color:"black",textDecoration:"none"}}>Workshop</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/gameofcodes">Game of codes</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/nontechnical/triathlon">Triathlon</a>
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}> A Technical and Non Technical event starts</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            11:30 am - 12.00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <SkipPreviousIcon />
            </TimelineDot>
            <TimelineConnector sx={{height:"20px"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
             <a href="/events/innovationodyssey" style={{color:"black",textDecoration:"none"}}>Innovation Odyssey</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/coolestmelinial">Coolest melinial</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/tellatale">Tell-A-Tale</a>
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>A Technical and Non Technical event starts</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
            >
                01.00 pm - 01.30 pm
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"20px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <DinnerDiningIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Lunch Break
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>Students can take up their Lunch.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
            >
                01.30 pm - 02.30 pm
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"60px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <SkipNextIcon />
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
             <a href="/events/technical/uiunleashed" style={{color:"black",textDecoration:"none"}}>UX Unleashed</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/hogwartscodequest">Howgarts Code Quest</a>
            </Typography>
            
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>A Second set of Technical and Non Technical events.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
            >
                02.00 pm - 02.30 pm
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{height:"80px"}}/>
            <TimelineDot color="primary" variant="outlined">
              <SkipNextIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
             <a href="/events/nontechnical/221bpuzzlehunt" style={{color:"black",textDecoration:"none"}}>The 221b Puzzle Hunt</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/tellatale">Tell-A-Tale (R2)</a> / <a style={{color:"black",textDecoration:"none"}} href="/events/technical/coolestmelinial">Coolest melinial (R2)</a>
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>A Second set of Technical and Non Technical events.</Typography>
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
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: "14px", md: "22px" }}}>
              End of the day. Valediction program.
            </Typography>
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" }}}>Melinia Day ends with Prize distribution at Auditorium!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
