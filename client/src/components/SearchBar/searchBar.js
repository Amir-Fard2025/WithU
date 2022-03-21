import * as React from "react";
import { Autocomplete, TextField, Stack } from "@mui/material";

// const size = {
//   transform: "scale(1.1)",
// };

export default function Search() {
  return (
    <>
      <Stack
        // style={size}
        className="stack"
        direction="row"
        spacing={3}
        transform="scale(1.5)"
        sx={{
          minHeight: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Autocomplete
          sx={{ paddingTop: "20%" }}
          className="autocomplete"
          multiple
          id="tags-standard"
          options={topResearch}
          getOptionLabel={(option) => option.search}
          defaultValue={[topResearch[13]]}
          renderInput={(params) => (
            <TextField
              sx={{ color: "white" }}
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
