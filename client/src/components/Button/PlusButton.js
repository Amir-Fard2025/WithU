import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButtonSize() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        minHeight: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fab color="info" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
