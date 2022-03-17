import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TextAlignment() {
  return (
    <Typography component="div">
      <Box
        sx={{
          textAlign: "center",
          marginLeft: 50,
          marginRight: 50,
          marginTop: 10,
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
{
  /* <Typography
  sx={{
    width: "50%",
    align: "inherit",
    textAlign: "center",
    paddingLeft: "20%",
    paddingTop: "20%",
  }}
>
  This page is about I am Lorem ipsum dolor sit amet, consectetur adipisicing
  elit. Commodi, architecto iusto magnam quidem totam eaque dolorum vel
  adipisci! Cumque consequuntur debitis tempore blanditiis aliquid perferendis
  magni nam, nihil explicabo ea!{" "}
</Typography>; */
}
