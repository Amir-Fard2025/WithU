import * as React from "react";
import { Autocomplete, TextField, Stack } from "@mui/material";

export default function Search() {
  return (
    <>
      <Stack
        className="stack"
        spacing={3}
        sx={{
          width: "50%",
          backgroundColor: "transparent",
          marginTop: "15%",
          marginLeft: "25%",
        }}
        textColor="inherit"
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

      {/* <div className="Aboutpage">
        <p sx={{ width: 500, py: 5, px: 5, mt: "auto" }}>
          This page is about I am Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque
          dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis
          aliquid perferendis magni nam, nihil explicabo ea!{" "}
        </p>
      </div> */}
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
