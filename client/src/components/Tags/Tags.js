import "./Tags.css";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableLinkChips() {
  return (
    <Stack className="tags" direction="row" spacing={1}>
      <>
        <Chip
          label="Children"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label=" Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </>
      <>
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </>
    </Stack>
  );
}
