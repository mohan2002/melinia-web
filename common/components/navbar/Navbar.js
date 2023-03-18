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
import { useRouter } from "next/navigation";

const pages = [
  {
    endpoint: "Home",
    endpointUrl: "/",
  },
  {
    endpoint: "Events",
    dropdown: [
      {
        endpoint: "Technical",
        subEndpoints: [
          {
            name: "UX Unleashed",
            endpoint: "/events/technical/uiunleashed",
          },
          {
            name: "Coolest Melinial",
            endpoint: "/events/technical/coolestmelinial",
          },
          {
            name: "Game of Codes",
            endpoint: "/events/technical/gameofcodes",
          },
          {
            name:"Hogwarts Code Quest",
            endpoint: "/events/technical/hogwartscodequest",
          },
          {
            name: "Innovation Odyssey",
            endpoint: "/events/technical/innovationodyssey",
          },
          {
            name: "Tell-a-Tale",
            endpoint: "/events/technical/tellatale",
          }
        ],
      },
      {
        endpoint: "Non Technical",
        subEndpoints: [
          {
            name: "Triathlon",
            endpoint: "/events/nontechnical/triathlon",
          },
          {
            name: "The 221B Puzzle Hunt",
            endpoint: "/events/nontechnical/221bpuzzlehunt",
          },
        ],
      },
      {
        endpoint: "Hackathon",
        endpointUrl: "/events/hackathon",
      },
      {
        endpoint: "Workshop",
        endpointUrl: "/events/workshop",
      },
    ],
  },
  {
    endpoint: "Committe",
    endpointUrl: "/committee",
  },
  {
    endpoint: "College Tour",
    endpointUrl:"/collegetour"
  },
];

function Navbar({ bgcolor }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [dropdown, setDropdown] = React.useState(null);
  const [submenuTech, setSubmenuTech] = React.useState(null);
  const [submenuNonTech, setSubmenuNonTech] = React.useState(null);
  const [isSticky, setIsSticky] = React.useState(false);

  const router = useRouter();

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

  React.useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 300; // adjust this value to match the height of your banner
      const isScrolled = window.scrollY > bannerHeight;
      setIsSticky(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleOpenSubmenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleOpenSubmenu = (event, endpoint) => {
    event.preventDefault();
    switch (endpoint) {
      case "Technical":
        setSubmenuTech(event.currentTarget);
        break;
      case "Non Technical":
        setSubmenuNonTech(event.currentTarget);
        break;
      default:
        break;
    }
  };
  const handleCloseSubmenu = () => {
    setSubmenuTech(null);
    setSubmenuNonTech(null);
    setDropdown(null);
  };

  return (
    <AppBar
      position={isSticky ? "fixed" : "static"}
      color="transparent"
      elevation={0}
      sx={{
        height: isSticky ? "8%" : "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: bgcolor || (isSticky && "#ED213A"),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box
              display="flex"
              alignItems="center"
              width={120}
              height={50}
              mt={1}
            >
              <img
                src="/images/melenialogo.png"
                style={{
                  width: "100%",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/");
                }}
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon style={{ color: "white", fontSize: "36px" }} />
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
                  sx={{ my: 2, color: "white", display: "block", mr: 4 }}
                  href="/"
                >
                  Home
                </Button>
              </Box>
              <Box onMouseLeave={handleCloseDropdown}>
                <Button
                  onMouseEnter={handleOpenDropdown}
                  sx={{ my: 2, color: "white", display: "block", mr: 4 }}
                >
                  Events
                </Button>
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
                      border: "1px solid #eee",
                      marginLeft: "2px",
                    },
                  }}
                >
                  {pages[1].dropdown.map((drop) => (
                    <div key={drop.endpoint}>
                      <MenuItem
                        onClick={
                          drop.subEndpoints
                            ? (event) => handleOpenSubmenu(event, drop.endpoint)
                            : () => {
                                handleCloseDropdown();
                                drop.endpointUrl &&
                                  router.push(drop.endpointUrl);
                              }
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
                          anchorEl={
                            drop.endpoint == "Technical"
                              ? submenuTech
                              : submenuNonTech
                          }
                          open={Boolean(
                            drop.endpoint == "Technical"
                              ? submenuTech
                              : submenuNonTech
                          )}
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
                              border: "1px solid #eee",
                              marginLeft: "10px",
                            },
                          }}
                        >
                          {drop.subEndpoints.map((subEndpoint) => (
                            <MenuItem
                              key={subEndpoint.name}
                              sx={{ paddingX: 3 }}
                              onClick={() => {
                                router.push(subEndpoint.endpoint);
                                handleCloseSubmenu;
                              }}
                            >
                              <Typography>{subEndpoint.name}</Typography>
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
                  onClick={() => {
                    router.push("/committee");
                    handleCloseNavMenu;
                  }}
                  sx={{ my: 2, color: "white", display: "block", mr: 4 }}
                >
                  Committee
                </Button>
              </Box>
              <Box>
              <Button
                onClick={() => {
                  window.open('https://citvirtualtour.onrender.com/index', '_blank');
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block', mr: 4 }}
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
