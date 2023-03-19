import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

export default function EventCard({event,url}) {
  const content = event.shortdescription
  const shortcontent = content.slice(0,126)
  const router = useRouter()
  return (
    <Card sx={{ maxWidth: 345, border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}} elevation="none" onClick={() => {
      router.push(url)
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={event.img}
          alt="green iguana"
        />
        <CardContent>
          <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" gap={0.5}>
            <Box mt={1}>
                <Typography fontSize={{xs:12,md:14}} color="#6A6A6A">{event.date}</Typography>
                <Typography fontSize={{xs:12,md:14}} color="#6A6A6A">{event.time}</Typography>
            </Box>
            <Box>
                <Typography variant="h5" fontWeight="700" mb={0.5} fontSize="20px">{event.eventname}</Typography>
                <Typography variant="p" color="#6A6A6A" letterSpacing={0.5} lineHeight={1.3}>{shortcontent}<span>...</span></Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}