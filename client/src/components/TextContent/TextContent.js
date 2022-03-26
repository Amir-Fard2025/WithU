import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TextAlignment() {
  return (
    <Typography component="div">
      <Box
        sx={{
          textAlign: "center",
          width: "40%",
          opacity: "0.7",
          marginLeft: "30%",
          color: "#2874A6",
          marginTop: "10px",
          fontFamily: "Roboto",
          fontSize: "calc(7px + 2vw)",
        }}
      >
        One platform for many affected souls.
      </Box>
    </Typography>
  );
}
