import React from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Label,
} from "@mui/material";
import { useState } from "react";
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
  },
};

export default function ResponsiveNavbar({ setOpen }) {
  const [alignment, setAlignment, value, setValue] = useState(0);
  //const [open, setOpen] = useState(false);

  const openLoginModal = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ background: "transparent" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "2rem" }}>WithU</Typography>

          <Tabs
            variant="text"
            onClick={openLoginModal}
            sx={{ marginLeft: "auto" }}
          >
            <Button variant="text" sx={buttonStyles}>
              Dashboard
            </Button>
          </Tabs>

          <Button variant="text" onClick={openLoginModal} sx={buttonStyles}>
            Login/SignUp
          </Button>

          <Button variant="text" sx={buttonStyles}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
