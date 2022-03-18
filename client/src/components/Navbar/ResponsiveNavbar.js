import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
//import LoginModal from "../LoginModal/LoginModal";

const buttonStyles = {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  marginLeft: "1vw",
  marginRight: "1vw",
};

export default function ResponsiveNavbar({ setOpen }) {
  const [value, setValue] = useState(0);
  //const [open, setOpen] = useState(false);

  const openLoginModal = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#8cb2f9" }}>
        <Toolbar justifycontent="space-around">
          <Typography sx={{ fontSize: "2rem" }}>WithU</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="black"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
          >
            <Tab label="Dashboard" />
          </Tabs>
          <Button
            variant="contained"
            onClick={openLoginModal}
            sx={buttonStyles}
          >
            Login/SignUp
          </Button>
          <Button variant="outlined" sx={buttonStyles}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
