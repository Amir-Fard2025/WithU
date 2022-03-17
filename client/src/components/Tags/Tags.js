import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableLinkChips() {
  return (
    <Stack
      className="tags"
      direction="row"
      spacing={1}
      sx={{
        minHeight: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <Chip
          label="Children"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label=" Ukraine"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Finance"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Shelters"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Germany"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </>
      <>
        <Chip
          label="Medical"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Border"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Transport"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Help"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </>
    </Stack>
  );
}
