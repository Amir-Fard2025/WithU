import React, { useState } from "react";
import { Autocomplete, TextField, Stack, Button } from "@mui/material";
export default function Search() {
  const [filters, setFilters] = useState([topResearch[13]]);

  const onSubmit = () => {
    const formatedFilters = filters
      .map((filter) => {
        return filter.search.toLowerCase();
      })
      .join(".");
    window.location.replace(`/results/${formatedFilters}`);
  };

  return (
    <>
      <Stack
        className="stack"
        spacing={3}
        sx={{
          width: "50%",
          paddingTop: "5%",
          marginLeft: "25%",
        }}
      >
        <Autocomplete
          sx={{ paddingTop: "20%" }}
          className="autocomplete"
          onChange={(event, value) => {
            setFilters(value);
          }}
          multiple
          id="tags-standard"
          options={topResearch}
          getOptionLabel={(option) => option.search}
          defaultValue={[topResearch[13]]}
          renderInput={(params) => {
            console.log(params);
            return (
              <TextField
                sx={{ color: "white" }}
                className="textfield"
                {...params}
                variant="standard"
                placeholder="How can I help..."
              />
            );
          }}
        />
        <Button
          sx={{ border: 2, backgroundColor: "yellow" }}
          onClick={onSubmit}
        >
          Hello
        </Button>
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
