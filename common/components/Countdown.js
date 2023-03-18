import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateCountdown = () => {
    const eventDate = new Date('2023-04-05T12:00:00');
    const currentDate = new Date();

    const timeDifference = eventDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container justify="center" alignItems="center" bgcolor="rgba(41, 36, 101, 0.69)" p={2} borderRadius="10px" marginTop="-60px">
      <Grid item xs={3}>
        <Typography variant="h3" fontSize={{xs:"24px",md:"42px"}} align="center" color="white">
          {countdown.days.toString().padStart(2, '0')}
        </Typography>
        <Typography variant="subtitle1"  align="center"  color="white">
          Days
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3" align="center" fontSize={{xs:"24px",md:"42px"}} color="white">
          {countdown.hours.toString().padStart(2, '0')}
        </Typography>
        <Typography variant="subtitle1" align="center"  color="white">
          Hours
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3" align="center" fontSize={{xs:"24px",md:"42px"}} color="white">
          {countdown.minutes.toString().padStart(2, '0')}
        </Typography>
        <Typography variant="subtitle1" align="center" color="white">
          Minutes
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3" align="center" fontSize={{xs:"24px",md:"42px"}} color="white">
          {countdown.seconds.toString().padStart(2, '0')}
        </Typography>
        <Typography variant="subtitle1" align="center"  color="white">
          Seconds
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Countdown;
