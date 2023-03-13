import Banner from "@/common/components/Banner";
import Navbar from "@/common/components/navbar/Navbar";
import ParticleComponent from "@/common/components/ParticleComponent";
import { CircularProgress, makeStyles } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  
  const gradient = "linear-gradient(90deg, #ED213A -1.32%, #93291E 98.68%)";
  if(loading){
    return(
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{background:gradient}}>
        <CircularProgress size={70} sx={{color:"white"}}/>
      </Box>
    )
  }
  return (
    <>
      <Box
        height="100vh"
        width="100%"
        bgcolor="red"
        sx={{ background: gradient }}
      >
        <Navbar />
        <ParticleComponent />
        <Banner/>
      </Box>
    </>
  );
}
