import React from "react";
import {
  AppBar,
  Button,
  // Tab,
  Tabs,
  Toolbar,
  Typography,
  Label,
} from "@mui/material";
import { useState } from "react";
import Auth from "../../utils/auth";
//import LoginModal from "../LoginModal/LoginModal";

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
  "&:hover": {
    color: "#ffeb3b",
    backgroundColor: "transparent",
  },
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
          <Typography sx={typographyStyle}>WithU</Typography>

          <div style={{ marginLeft: "auto" }}></div>
          <Button variant="text" sx={buttonStyles}>
            Dashboard
          </Button>
          {loggedIn ? (
            <Button variant="text" sx={buttonStyles} onClick={Auth.logout}>
              Logout
            </Button>
          ) : (
            <Button variant="text" onClick={openLoginModal} sx={buttonStyles}>
              Login/SignUp
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
