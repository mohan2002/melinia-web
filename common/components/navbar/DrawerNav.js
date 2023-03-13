import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DrawerNav = ({ open, setOpen, pages }) => {
  const [showEvents, setShowEvents] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleEventsToggle = () => {
    setShowEvents((prevState) => !prevState);
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
      <Box pt={2}>
        <List sx={{ width: 300, px: 2 }}>
          {pages.map((text) => (
            <div key={text.endpoint}>
              <ListItem
                button
                onClick={text.endpoint === 'Events' ? handleEventsToggle : handleDrawerClose}
                sx={{ py: 2 }}
              >
                <ListItemText primary={<Typography variant="body1">{text.endpoint}</Typography>} />
                {text.endpoint === 'Events' && <ExpandMoreIcon sx={{ mr: 1 }} />}
              </ListItem>
              {text.endpoint === 'Events' && showEvents && (
                <>
                  <Divider />
                  <Box p={2}>
                    {text.dropdown.map((event) =>
                      event.subEndpoints ? (
                        <div key={event.endpoint}>
                          <ListItem button sx={{ py: 1, pl: 2 }} onClick={handleDrawerClose}>
                            <ListItemText
                              primary={<Typography variant="body1">{event.endpoint}</Typography>}
                            />
                            {/* <ExpandMoreIcon /> */}
                          </ListItem>
                          <Divider />
                          <List component="div" disablePadding>
                            {event.subEndpoints.map((subEndpoint) => (
                              <ListItem button key={subEndpoint} sx={{ py: 1, pl: 4 }}>
                                <ListItemText primary={subEndpoint} />
                              </ListItem>
                            ))}
                          </List>
                          <Divider />
                        </div>
                      ) : (
                        <ListItem
                          key={event.endpoint}
                          button
                          sx={{ py: 1, pl: 2 }}
                          onClick={handleDrawerClose}
                        >
                          <ListItemText
                            primary={<Typography variant="body1">{event.endpoint}</Typography>}
                          />
                          <Divider />
                          
                        </ListItem>
                      )
                    )}
                  </Box>
                </>
              )}
              <Divider />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerNav;
