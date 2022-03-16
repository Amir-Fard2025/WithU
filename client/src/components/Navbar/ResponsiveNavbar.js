import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

export default function ResponsiveNavbar() {
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#8cb2f9" }}>
        <Toolbar justifyContent="space-around">
          <Typography sx={{ fontSize: "2rem" }}>WithU</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="black"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
          >
            <Tab label="Dashboard" />
            <Button variant="contained" sx={{ padding: "8px" }}>
              Login/SignUp
            </Button>
            <Button variant="outlined" sx={{ padding: "8px" }}>
              Logout
            </Button>
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
