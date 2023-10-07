import { AppBar, Box, Button, Divider, Drawer, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from '@mui/material/InputBase';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";
import Logo from '../../../src/images/logo.png'
import './Header.css'

const Header = () => {
  const [mobileOpen, setMbbileOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // handle menu click
  const handleDrawerToggle = () => {
    setMbbileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Typography variant="h4" className="logo" color='secondary'>
           Roomlo</Typography >
      </Typography>
      <Divider/>

      <ul className="mobile-navigation-menu">
                <li>
                  <NavLink   to={"/"}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink className='services' to={"/"}>
                     Services
                  </NavLink>
                </li>                
                <li>
                  <NavLink to={"/cover"} >
                    Post Your Propertes
                    <span className="span">free</span>                  
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/carear"}>
                    Login
                  </NavLink>
                </li>

              </ul>

    </Box>
  );

  return (
    <>
      <Box className={`navbar ${isSticky ? ' sticky' : ''}`}>
        <AppBar component={"nav"} sx={{ bgcolor: "#fff" }}>
          <Toolbar>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"#fff"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <img className="logo" src={Logo} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink  to={"/"} className='home'>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink className='services' to={"/services"}>
                     Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/list"} className='post_proterties' >
                    Post Your Properties                    
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>
                    Login
                  </NavLink>|
                  {/* <Divider orientation="vertical" flexItem /> */}
                  <NavLink to={"/register"}>
                    Register
                  </NavLink>
                </li>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;