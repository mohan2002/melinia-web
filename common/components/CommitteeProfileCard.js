import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:"320px",
    height:{xs:"auto",md:"340px"},
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
  },
  image: {
    width: '100%',
    height:"280px",
    objectFit:"cover",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
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
        <Typography gutterBottom variant="h6" fontWeight="700" className="name">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" fontWeight="700" className="position">
          {position}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" mt={0.5} textAlign="center" className="designation">
          {designation}
        </Typography>
       
        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={1} className="cta" onClick={() => window.location.href=`tel:${phone}`} sx={{cursor:"pointer"}}>
          <PhoneIcon color="#6E798C" sx={{ color: "#FF6B6B",fontSize:{xs:"20px",md:"24px"}}} />
          <Typography variant="body2" color="textSecondary" component="p" fontWeight="700" className="phone">
            {phone}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center" gap={1} mt={1} className="cta" onClick={() => window.location.href=`mailto:${mail}`} sx={{cursor:"pointer"}}>
          <EmailIcon color="#6E798C" sx={{ color: "#4ECDC4",fontSize:{xs:"20px",md:"24px"}}} />
          <Typography variant="body2" color="textSecondary" component="p" fontWeight="700" className="email">
            {mail}
          </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default CommitteeProfileCard;
