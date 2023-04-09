import AboutMelinia from "@/common/components/AboutMelinia";
import Cover from "@/common/components/Banner";
import Banner from "@/common/components/Banner";
import Navbar from "@/common/components/navbar/Navbar";
import ParticleComponent from "@/common/components/ParticleComponent";
import { CircularProgress, makeStyles } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import Loader from "react-loading-indicators";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ..
import dynamic from "next/dynamic";
import AOS from "aos";
import EventsGrid from "@/common/components/EventsGrid";
import QueryCard from "@/common/components/QueryCard";
import Sponsors from "@/common/components/Sponsors";
import MeliniaTimeline from "@/common/components/MeliniaTimeline";
import HackathonCard from "@/common/components/HackathonCard";
import WorkshopCard from "@/common/components/WorkshopCard";
import Script from "next/script";
import ConnectUs from "@/common/components/ConnectUs";
import BottomFooter from "@/common/components/BottomFooter";
import ChiefGuest from "@/common/components/ChiefGuest";
import Countdown from "@/common/components/Countdown";
import Head from "next/head";
import OpenExpo from "@/common/components/OpenExpo";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const gradient = "linear-gradient(90deg, #ED213A -1.32%, #93291E 98.68%)";
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ background: gradient }}
      >
        <Loader variant="split-disc" color="white" size="medium" />
      </Box>
    );
  }
  return (
    <>
      <Head>
        <title>Melinia 2K23</title>
        <link rel="icon" href="/images/blacklogo.jpg" style={{borderRadius:"100%"}}/>
      </Head>
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
      <div>
        <Box
          height="100vh"
          width="100%"
          bgcolor="red"
          sx={{ background: gradient }}
        >
          <Navbar />
          <ParticleComponent />
          <Banner />
        </Box>
        <AboutMelinia />
        <EventsGrid />
        <WorkshopCard />
        <HackathonCard />
        <OpenExpo/>
        <QueryCard />
        <Sponsors />
        <MeliniaTimeline />
        <ChiefGuest />
        <ConnectUs />
        <BottomFooter />
      </div>
      <ToastContainer />
    </>
  );
}
