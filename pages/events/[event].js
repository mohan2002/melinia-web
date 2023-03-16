import BottomFooter from '@/common/components/BottomFooter'
import EventBanner from '@/common/components/EventBanner'
import EventDetailsCard from '@/common/components/EventDetailsCard'
import EventRewards from '@/common/components/EventRewards'
import EventRule from '@/common/components/EventRule'
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
      <EventRule/>
      <EventRewards/>
      <BottomFooter/>
    </Box>
  )
}

export default Event