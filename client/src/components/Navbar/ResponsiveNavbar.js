import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Auth from "../../utils/auth";
import logo from "../../images/logopng.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const buttonStyles = {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  marginLeft: "1vw",
  marginRight: "1vw",
  textTransform: "none",
  color: "white",
  "&:hover": {
    color: "#ffeb3b",
    backgroundColor: "transparent",
    fontSize: 16,
  },
};

const typographyStyle = {
  fontSize: "2rem",
  color: "white",
};

export default function ResponsiveNavbar({ setOpen }) {
  const [alignment, setAlignment, value, setValue] = useState(0);

  const openLoginModal = () => {
    setOpen(true);
  };
  const loggedIn = !!localStorage.getItem("id_token");

  const openContactModal = () => {
    setOpen(true);
  };
  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ background: "transparent" }}>
        <Toolbar>
          <div>
            <img src={logo} alt="logo" className="logopng"></img>
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography className="title" sx={typographyStyle}>
                WithU{" "}
              </Typography>
            </a>
          </div>
          <div style={{ marginLeft: "auto" }}></div>
          {loggedIn ? (
            <Link to="/dashboard">
              <Button variant="text" sx={buttonStyles} >
                Dashboard
              </Button>
            </Link>

          ) : (
            ""
          )}
          {loggedIn ? (
            <Button variant="text" sx={buttonStyles} onClick={Auth.logout}>
              Logout
            </Button>
          ) : (
            <Button variant="text" onClick={openLoginModal} sx={buttonStyles}>
              Login / Sign Up
            </Button>
          )}
          <Box sx={{ color: "black" }}>
            <Typography sx={{ textAlign: "center" }} component="div">
              <Link
                to="/faq"
                underline="none"
                fontSize="15px"
                style={buttonStyles}
              >
                <Button variant="text" sx={buttonStyles}>
                  FAQ
                </Button>
              </Link>
            </Typography>
          </Box>
          <Button sx={buttonStyles} onClick={openContactModal}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
