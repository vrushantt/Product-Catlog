import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import Logo from "../assets/Log.png";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircle";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeople";
import BiotechRoundedIcon from "@mui/icons-material/Biotech";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLong";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStats";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboard";
import { signOut } from "firebase/auth";
import { Grid2 } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const pages = ["Login"];
const settings = ["Logout"];

const drawermenu = [
  // { Name: "User Creation", path: "/labs/Usercreation" },
  // { Name: "Patient Master", path: "/labs/Patientmaster" },
  // { Name: "Test Master", path: "/labs/Testmaster" },
  // { Name: "Lab Test", path: "/labs/Labtest" },
  // { Name: "Status Check", path: "/labs/Statuscheck" },
  // { Name: "Dashboard", path: "/labs/Dashboard" },
];

const Navbar = ({ cart, handlecart }) => {
  //Firebase Signout

  const Signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  //drawer

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Grid2 container>
        <Grid2
          item
          container
          size={8}
          sx={{
            justifyContent: "start",
            alignItems: "center",
            // marginLeft: "1.4em",
          }}
        >
          {" "}
          <img src={Logo} style={{ marginLeft: "13px" }} height="35"></img>
        </Grid2>

        <Grid2 item container size={4} sx={{ justifyContent: "end" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, false)}
            color="inherit"
          >
            <KeyboardDoubleArrowLeftIcon
              sx={{
                backgroundColor: "#F74055",
                color: "white",
                height: "1em",
                width: "1em",
                borderRadius: "3px",
              }}
            />
          </IconButton>
        </Grid2>
      </Grid2>
      <Divider />

      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          backgroundColor: "",
          height: "100%",
          // marginTop: '100em'
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List sx={{ padding: "2px" }}>
          {drawermenu.map((val, index) => (
            <ListItem
              sx={{ fontFamily: "Rubik" }}
              key={val.Name}
              disablePadding
              onClick={() => {}}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && (
                    <SupervisedUserCircleRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                  {index === 1 && (
                    <EmojiPeopleRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                  {index === 2 && (
                    <BiotechRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                  {index === 3 && (
                    <ReceiptLongRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                  {index === 4 && (
                    <QueryStatsRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                  {index === 5 && (
                    <SpaceDashboardRoundedIcon
                      sx={{
                        backgroundColor: "#F74055",
                        color: "white",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={val.Name} sx={{ fontFamily: "Rubik" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Box>
    </>
  );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //to give reference

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ color: "black", marginLeft: "-10px" }}>
         
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <img
              onClick={() => {}}
              src={Logo}
              style={{ marginLeft: "7px" }}
              height="45"
            ></img>
         

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  ml: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: '.3rem',
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                aria-label="cart"
                onClick={() => {
                  handlecart();
                }}
              >
                <StyledBadge badgeContent={0} color="secondary">
                  <ShoppingCartIcon
                    sx={{
                      backgroundColor: "#F74055",
                      color: "white",
                      borderRadius: "2px",
                      fontSize: "1.3em",
                      padding: "1.5px",
                    }}
                  />
                </StyledBadge>
              </IconButton>

          
          

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Grid2
                    container
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid2 item>
                      {" "}
                      <MenuItem key={setting}>
                        <Typography sx={{ fontFamily: "Rubik" }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    </Grid2>

                    <Grid2 item>
                      {" "}
                      <IconButton>
                        <LogoutIcon
                          onClick={handleCloseUserMenu}
                          sx={{
                            backgroundColor: "#F74055",
                            color: "white",
                            borderRadius: "3px",
                          }}
                        />
                      </IconButton>
                    </Grid2>
                  </Grid2>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
