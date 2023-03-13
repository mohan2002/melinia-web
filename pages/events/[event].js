import { useRouter } from 'next/router'
import React from 'react'

function Event() {
  const router = useRouter()
  const eventname = router.asPath.split("/events/").pop()
  return (
    <div>{eventname}</div>
  )
}

export default Event