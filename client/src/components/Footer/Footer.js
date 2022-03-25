import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, Grid, Link, Typography } from "@mui/material";

export default function Footer({ setOpen }) {
  return (
    <Box
      //container
      sx={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <CssBaseline />

      <Box
        // container
        component="footer"
        sx={{
          px: 2,
          m: "auto",
          backgroundColor: "transparent",
          // display: "flex",
        }}
      >
        <Box sx={{ textAlign: "center", color: "#2874A6" }}>© WithU 2022</Box>
      </Box>
    </Box>
  );
}
