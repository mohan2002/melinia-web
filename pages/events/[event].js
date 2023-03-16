import EventBanner from '@/common/components/EventBanner'
import EventDetailsCard from '@/common/components/EventDetailsCard'
import Navbar from '@/common/components/navbar/Navbar'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

function Event() {
  const router = useRouter()
  const eventname = router.asPath.split("/events/").pop()
  return (
    <Box>
      <Box height="100vh">
        <Navbar bgcolor="#ED213A"/>
        <EventBanner/>
      </Box>
      <EventDetailsCard/>
    </Box>
  )
}

export default Event