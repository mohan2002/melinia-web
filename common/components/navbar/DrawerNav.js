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
import { useRouter } from 'next/router';

const DrawerNav = ({ open, setOpen, pages }) => {
  const [showEvents, setShowEvents] = useState(false);
  const router = useRouter();

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
          {pages.map((page) => (
            <div key={page.endpoint}>
              <ListItem
                button
                onClick={() => {
                  if (page.endpoint === 'Events') {
                    handleEventsToggle();
                  } else if (page.endpointUrl) {
                    router.push(page.endpointUrl);
                    handleDrawerClose();
                  } else {
                    handleDrawerClose();
                  }
                }}
                sx={{ py: 2 }}
              >
                <ListItemText primary={<Typography variant="body1">{page.endpoint}</Typography>} />
                {page.endpoint === 'Events' && <ExpandMoreIcon sx={{ mr: 1 }} />}
              </ListItem>
              {page.endpoint === 'Events' && showEvents && (
                <>
                  <Divider />
                  <Box p={2}>
                    {page.dropdown.map((dropdownPage) =>
                      dropdownPage.subEndpoints ? (
                        <div key={dropdownPage.endpoint}>
                          <ListItem
                            button
                            sx={{ py: 1, pl: 2 }}
                            onClick={() => handleDrawerClose()}
                          >
                            <ListItemText
                              primary={<Typography variant="body1">{dropdownPage.endpoint}</Typography>}
                            />
                            <ExpandMoreIcon />
                          </ListItem>
                          <Divider />
                          <List component="div" disablePadding>
                            {dropdownPage.subEndpoints.map((subEndpoint) => (
                              <ListItem
                                button
                                key={subEndpoint.name}
                                sx={{ py: 1, pl: 4 }}
                                onClick={() => {
                                  handleDrawerClose();
                                  router.push(subEndpoint.endpoint);
                                }}
                              >
                                <ListItemText primary={subEndpoint.name} />
                              </ListItem>
                            ))}
                          </List>
                          <Divider />
                        </div>
                      ) : (
                        <ListItem
                          key={dropdownPage.endpoint}
                          button
                          sx={{ py: 1, pl: 2 }}
                          onClick={() => {
                            handleDrawerClose();
                            router.push(dropdownPage.endpointUrl);
                          }}
                        >
                          <ListItemText
                            primary={<Typography variant="body1">{dropdownPage.endpoint}</Typography>}
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
