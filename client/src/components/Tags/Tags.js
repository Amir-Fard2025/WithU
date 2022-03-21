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
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <>
        <Chip
          label="Children"
          component="a"
          href="#basic-chip"
          variant="filled"
          color="primary"
          clickable
        />
        <Chip
          label=" Ukraine"
          component="a"
          href="#basic-chip"
          variant="filled"
          color="primary"
          clickable
        />
        <Chip
          label="Finance"
          component="a"
          href="#basic-chip"
          variant="filled"
          color="primary"
          clickable
        />
        <Chip
          label="Shelters"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          label="Germany"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
      </>
      <>
        <Chip
          label="Medical"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          label="Border"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          label="Transport"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          label="Help"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
      </>
    </Stack>
  );
}
