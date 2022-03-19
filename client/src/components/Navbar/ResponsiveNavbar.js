import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const buttonStyles = {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  marginLeft: "1vw",
  marginRight: "1vw",
};
export default function ResponsiveNavbar() {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ background: "transparent" }}>
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
          <Button variant="contained" sx={buttonStyles}>
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
