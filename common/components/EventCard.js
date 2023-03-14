import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345, border:"1px solid #eee",boxShadow:"box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}} elevation="none">
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qQjG9Vw37SBUmwkYJTk3O8OnuAZrpgjn1g&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" gap={0.5}>
            <Box mt={1}>
                <Typography fontSize={14} color="#6A6A6A">APR 5 - 12.30 PM</Typography>
            </Box>
            <Box>
                <Typography variant="h5" fontWeight="600" mb={0.5}>Datathon</Typography>
                <Typography variant="p" color="#6A6A6A" letterSpacing={0.5} lineHeight={1.3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}