import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, Grid, Link, Typography } from "@mui/material";

export default function Footer({ setOpen }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          px: 2,
          m: "auto",
          backgroundColor: "transparent",
        }}
      >
        <Box sx={{ textAlign: "center", color: "#2874A6" }}>© WithU 2022</Box>
      </Box>
    </Box>
  );
}
