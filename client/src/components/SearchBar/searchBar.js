import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./SearchBar.css";

export default function Search() {
  return (
    <>
      <Stack
        className="stack"
        spacing={3}
        sx={{ width: 500, color: "primary.main" }}
      >
        <Autocomplete
          className="autocomplete"
          multiple
          id="tags-standard"
          options={topResearch}
          getOptionLabel={(option) => option.search}
          defaultValue={[topResearch[13]]}
          renderInput={(params) => (
            <TextField
              className="textfield"
              {...params}
              variant="standard"
              placeholder="How can I help..."
            />
          )}
        />
      </Stack>
    </>
  );
}

// Top 13 Research dummies
const topResearch = [
  { search: "Ukraine" },
  { search: "Children" },
  { search: "Finance" },
  { search: "Shelters" },
  { search: "Germany" },
  { search: "Animals" },
  { search: "Refugees" },
  {
    search: "Medical",
  },
  { search: "Transport" },
  { search: "Border" },
  {
    search: "Stay",
  },
  {
    search: "Legal",
  },
  { search: "Place" },
  { search: "Help" },
];
