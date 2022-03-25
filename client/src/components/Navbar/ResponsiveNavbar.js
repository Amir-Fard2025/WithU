import React from "react";
import {
  AppBar,
  Button,
  // Tab,
  Tabs,
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
  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ background: "transparent" }}>
        <Toolbar>
          <div>
            <img src={logo} alt="logo" className="logopng"></img>
            <Typography className="title" sx={typographyStyle}>
              WithU{" "}
            </Typography>
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
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
