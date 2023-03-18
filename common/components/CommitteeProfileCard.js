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
    width:"320px",
    height:{xs:"auto",md:"340px"}
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

function CommitteeProfileCard({img,name,position,designation,phone,mail}) {
  return (
    <Card style={styles.card}>
      <img src={img} alt="Profile Picture" style={styles.image} />
      <CardContent style={styles.content}>
        <Typography gutterBottom variant="h6" fontWeight="700">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" fontWeight="700" sx={{textDecoration:"underline"}}>
          {position}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" mt={0.5} textAlign="center">
          {designation}
        </Typography>
       
        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={0.5}>
          <PhoneCallbackIcon
                    color="#6E798C"
                    sx={{ color: "#6A6A6A",fontSize:{xs:"16px",md:"20px"}}}
                  />
          <Typography variant="body2" color="textSecondary" component="p">
            {phone}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={0.5}>
          <EmailOutlinedIcon
                    color="#6E798C"
                    sx={{ color: "#6A6A6A",fontSize:{xs:"16px",md:"20px"}}}
                  />
          <Typography variant="body2" color="textSecondary" component="p">
            {mail}
          </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default CommitteeProfileCard;
