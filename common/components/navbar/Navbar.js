import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DrawerNav from "./DrawerNav";
import { List, ListItem } from "@mui/material";
// import Logo from "../../../assets/images/melinialogo.png"

const pages = [
  {
    endpoint: "Home",
  },
  {
    endpoint: "Events",
    dropdown: [
      {
        endpoint: "Technical",
        subEndpoints: [
          "Technical Event A",
          "Technical Event B",
          "Technical Event C",
        ],
      },
      {
        endpoint: "Non Technical",
        subEndpoints: [
          "Non Technical Event A",
          "Non Technical Event B",
          "Non Technical Event C",
        ],
      },
      {
        endpoint: "Hackathon",
      },
      {
        endpoint: "Workshop",
      },
    ],
  },
  {
    endpoint: "Committe",
  },
  {
    endpoint: "College Tour",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [dropdown, setDropdown] = React.useState(null);
  const [submenu, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenDropdown = (event) => {
    setDropdown(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setDropdown(null);
  };

  const handleOpenSubmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSubmenu = () => {
    setAnchorEl(null);
    setDropdown(null)
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center" width={120} height={50} bgcolor="red" mt={1}>
                <img src="/images/melenialogo.png" alt="Image" style={{
                  width:"100%"
                }}/>
            </Box>

            <Box display="flex" alignItems="center">
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <DrawerNav
                open={anchorElNav}
                setOpen={setAnchorElNav}
                pages={pages}
              />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mr: 4 }}
                >
                  Home
                </Button>
              </Box>
              <Box onMouseLeave={handleCloseDropdown}>
                <Button
                  onMouseEnter={handleOpenDropdown}
                  sx={{ my: 2, color: "black", display: "block", mr: 4 }}
                >
                  Events
                </Button>
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={dropdown}
                  keepMounted
                  open={Boolean(dropdown)}
                  onClose={handleCloseDropdown}
                  sx={{
                    display: { xs: "none", md: "block" },
                    marginTop: 1,
                  }}
                  onMouseLeave={handleCloseDropdown}
                >
                  {pages[1].dropdown.map((drop) => (
                    <MenuItem
                    key={drop}
                    onClick={handleCloseDropdown}
                    sx={{ paddingX: 3, paddingY: 1,display:'flex',flexDirection:'column',alignItems:"flex-start",pr:5}}
                  >
                    <Typography textAlign="center">{drop.endpoint}</Typography>
                  </MenuItem>
                  ))}
                </Menu> */}
                <Menu
                  id="menu-appbar"
                  anchorEl={dropdown}
                  keepMounted
                  open={Boolean(dropdown)}
                  onClose={handleCloseDropdown}
                  sx={{
                    display: { xs: "none", md: "block" },
                    marginTop: 1,
                  }}
                  onMouseLeave={handleCloseDropdown}
                  elevation="none"
                  PaperProps={{
                    style: {
                      border:"1px solid #eee",
                      marginLeft:"2px"
                    },
                  }}
                >
                  {pages[1].dropdown.map((drop) => (
                    <div key={drop.endpoint}>
                      <MenuItem
                        onClick={
                          drop.subEndpoints
                            ? (event) => handleOpenSubmenu(event, drop.endpoint)
                            : handleCloseDropdown
                        }
                        sx={{
                          paddingX: 3,
                          paddingY: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          pr: 5,
                        }}
                      >
                        <Typography textAlign="center">
                          {drop.endpoint}
                        </Typography>
                      </MenuItem>
                      {drop.subEndpoints && (
                        <Menu
                          anchorEl={submenu}
                          open={Boolean(submenu)}
                          onClose={handleCloseSubmenu}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          elevation="none"
                          PaperProps={{
                            style: {
                              border:"1px solid #eee",
                              marginLeft:"10px"
                            },
                          }}
                        >
                          {drop.subEndpoints.map((subEndpoint) => (
                            <MenuItem
                              key={subEndpoint}
                              sx={{ paddingX: 3 }}
                              onClick={handleCloseSubmenu}
                            >
                              <Typography>{subEndpoint}</Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      )}
                    </div>
                  ))}
                </Menu>
              </Box>

              <Box>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mr: 4 }}
                >
                  Committee
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mr: 4 }}
                >
                  College Tour
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
