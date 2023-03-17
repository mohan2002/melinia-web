import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Box } from '@mui/system';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:"320px"
  },
  image: {
    width: '100%',
    height:"250px",
    objectFit:"cover"
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 20,
  },
};

function CommitteeProfileCard() {
  return (
    <Card style={styles.card}>
      <img src="/images/dd.jpeg" alt="Profile Picture" style={styles.image} />
      <CardContent style={styles.content}>
        <Typography gutterBottom variant="h6" fontWeight="700">
          J DANESH DHEERTHAN
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CHAIRMAN
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" mt={0.5}>
          Msc Decision and Computing Science
        </Typography>
       
        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={0.5}>
          <PhoneCallbackIcon
                    color="#6E798C"
                    sx={{ color: "#6A6A6A",fontSize:{xs:"16px",md:"20px"}}}
                  />
          <Typography variant="body2" color="textSecondary" component="p">
            +91 9842398623
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={0.5}>
          <EmailOutlinedIcon
                    color="#6E798C"
                    sx={{ color: "#6A6A6A",fontSize:{xs:"16px",md:"20px"}}}
                  />
          <Typography variant="body2" color="textSecondary" component="p">
            1933005mdcs@cit.edu.in
          </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default CommitteeProfileCard;
