<<<<<<< HEAD
import React, { useState } from "react";
import { Autocomplete, TextField, Stack, Button } from "@mui/material";
=======
import * as React from "react";
import { Autocomplete, TextField, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./searchBar.css";
// const size = {
//   transform: "scale(1.1)",
// };

>>>>>>> dev
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
        // style={size}
        className="stack"
        direction="row"
        spacing={3}
        sx={{
          minHeight: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
<<<<<<< HEAD
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
=======
        <div className="search-bar-wrapper">
          <Autocomplete
            sx={{
              minWidth: "40%",
              height: "4vh",
              flexGrow: "1",
            }}
            className="autocomplete"
            multiple
            id="tags-standard"
            options={topResearch}
            getOptionLabel={(option) => option.search}
            defaultValue={[topResearch[13]]}
            renderInput={(params) => (
              <TextField
                sx={{
                  color: "white",
                  height: "4vh",
                }}
                className="textfield"
                {...params}
                variant="standard"
                placeholder="Type..."
              />
            )}
          />
          <Button
            variant="contained"
            className="my-buttton"
            // sx={{
            //   display: "flex",
            //   backgroundColor: "yellow",
            //   opacity: "0.7",
            //   height: "4vh",
            // }}
          >
            <Typography sx={{ color: "black" }}>Search</Typography>
          </Button>
        </div>
>>>>>>> dev
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
