import Banner from "@/common/components/Banner";
import Navbar from "@/common/components/navbar/Navbar";
import ParticleComponent from "@/common/components/ParticleComponent";
import { Box, Container } from "@mui/system";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const gradient = "linear-gradient(90deg, #ED213A -1.32%, #93291E 98.68%)";
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
