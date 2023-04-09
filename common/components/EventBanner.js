import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function EventBanner({data,type}) {
  return (
    <Box display="flex" height="90%" alignItems="center" bgcolor="rgba(237, 33, 58, 0.12);">
      <Container>
        <Box sx={{display:"flex", flexDirection:"column",alignItems:{xs:"center",md:"flex-start"}}}>
          <Typography variant="h3" fontWeight="600" sx={{fontSize:{xs:"30px",md:"42px"},paddingTop:{xs:"20px",md:"0px"}}}>
            {data.eventname}
          </Typography>
          <Typography
            variant="caption"
            fontWeight="400"
            color="#6A6A6A"
            ml={0.4}
          >
            {type}
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{flexDirection:{xs:"column",md:"row"},gap:{xs:"10px",md:"30px"},marginTop:{xs:"10px",md:"20px"}}}
          alignItems="center"
        >
          <Box sx={{height:{xs:"200px",md:"400px"}}} width={{xs:"auto",md:"50%"}}>
            <img src={data.img} style={{ height: "100%",width:"100%",objectFit:"contain" }}/>
          </Box>
          <Box  width={{xs:"auto",md:"50%"}}>
            <Typography
              sx={{ textIndent: {xs:"0px",md:"80px"},fontSize:{xs:"12px",md:"14px"},marginTop:{xs:"10px",md:"0px"} }}
              lineHeight={1.6}
              letterSpacing={1.1}
              color="#6A6A6A"
              variant="body2"
              component="p"
              mt={3}
              textAlign="justify"
            >
              {data.description}
            </Typography>

            <Box display="flex" width="100%" mt={2} sx={{justifyContent:{xs:"center",md:"flex-start"}}}>
            <Button
              sx={{
                marginTop: "20px",
                background: "#ED213A",
                color: "white",
                ":hover": { background: "#ED213A" },
              }}
              variant="contained"
            >
              Event Completed
            </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default EventBanner;
