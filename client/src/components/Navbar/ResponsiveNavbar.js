import React from "react";
import {
  AppBar,
  Box,
  Button,
  Link,
  // Tab,
  //Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Auth from "../../utils/auth";
//import LoginModal from "../LoginModal/LoginModal";
import logo from "../../images/logopng.png";
import "./Navbar.css";

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
  //const [open, setOpen] = useState(false);

  const openLoginModal = () => {
    setOpen(true);
  };
  const loggedIn = !!localStorage.getItem("id_token");

  const openContactModal = () => {
    console.log("modal clicked fromat footer");
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
            <Button variant="text" sx={buttonStyles}>
              Dashboard
            </Button>
          ) : (
            <Button></Button>
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
          {/* add FAQ and contact here */}
          <Box sx={{ color: "black" }}>
            <Typography sx={{ textAlign: "center" }} component="div">
              <Link
                href="/faq"
                underline="none"
                fontSize="15px"
                sx={buttonStyles}
              >
                FAQ
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
