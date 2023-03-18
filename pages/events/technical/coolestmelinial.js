import BottomFooter from '@/common/components/BottomFooter'
import EventBanner from '@/common/components/EventBanner'
import EventDetailsCard from '@/common/components/EventDetailsCard'
import EventRewards from '@/common/components/EventRewards'
import EventRule from '@/common/components/EventRule'
import Navbar from '@/common/components/navbar/Navbar'
import { technicaldata } from '@/common/utils/data'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loader from "react-loading-indicators";

function Event() {
  const router = useRouter()
  const eventname = router.asPath.split("/events/technical/").pop()
  const data = technicaldata[eventname]

  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
  },[])
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
    <Box>
      <Box height="100vh">
        <Navbar bgcolor="#ED213A"/>
        <EventBanner data={data} type="Technical Event"/>
      </Box>
      <EventDetailsCard data={data}/>
      <EventRule data={data}/>
      <EventRewards data={data}/>
      <BottomFooter />
    </Box>
  )
}

export default Event