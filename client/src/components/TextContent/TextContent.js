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
          borderColor: "transparent",
          borderRadius: "10px",
          marginLeft: "30%",
          color: "#2874A6",
          marginTop: "10px",
          fontFamily: "Roboto",
        }}
      >
        This page is about I am Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque
        dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis
        aliquid perferendis magni nam, nihil explicabo ea!.
      </Box>
    </Typography>
  );
}
