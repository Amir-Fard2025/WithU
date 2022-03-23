import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const colors = {
  color: "white",
  backgroundColor: "#0288d1",
  opacity: "0.7",
};

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
          style={colors}
          label="Children"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
        />
        <Chip
          style={colors}
          label=" Ukraine"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
        />
        <Chip
          style={colors}
          label="Finance"
          component="a"
          href="#basic-chip"
          variant="filled"
          color="primary"
          clickable
        />
        <Chip
          style={colors}
          label="Shelters"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          style={colors}
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
          style={colors}
          label="Medical"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          style={colors}
          label="Border"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          style={colors}
          label="Transport"
          component="a"
          href="#basic-chip"
          variant="filled"
          clickable
          color="primary"
        />
        <Chip
          style={colors}
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
