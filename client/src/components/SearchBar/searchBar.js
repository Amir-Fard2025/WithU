import React, { useState } from "react";
import { Autocomplete, TextField, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./searchBar.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// const size = {
//   transform: "scale(1.1)",
// };
const useStyles = makeStyles({
  option: {
    backgroundColor: "#FFFC3A ",
    opacity: "0.7",
    color: "black",
    "&:hover": {
      backgroundColor: "#3ABCFF !important",
    },
  },
});

export default function Search() {
  const [filters, setFilters] = useState([topResearch[13]]);
  const history = useNavigate();
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const onSubmit = () => {
    const formatedFilters = filters
      .map((filter) => {
        return filter.search.toProperCase();
      })
      .join(".");
    history(`/results/${formatedFilters}`);
  };

  const styles = useStyles();

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
        <div className="search-bar-wrapper">
          <Autocomplete
            sx={{
              minWidth: "40%",
              height: "4vh",
              flexGrow: "1",
            }}
            className="autocomplete"
            onChange={(event, value) => {
              setFilters(value);
            }}
            options={topResearch}
            classes={{
              option: styles.option,
            }}
            multiple
            id="tags-standard"
            renderOption={(props, option) => {
              const { search, color } = option;
              return (
                <span {...props} style={{ backgroundColor: color }}>
                  {search}
                </span>
              );
            }}
            getOptionLabel={(option) => option.search}
            renderInput={(params) => {
              console.log(params);
              return (
                <TextField
                  sx={{ color: "white", height: "4vh" }}
                  className="textfield"
                  {...params}
                  variant="standard"
                  placeholder="Type..."
                />
              );
            }}
          />
          <Button
            variant="outlined"
            className="my-buttton"
            onClick={onSubmit}
            // sx={{
            //   display: "flex",
            //   backgroundColor: "yellow",
            //   opacity: "0.7",
            //   height: "4vh",
            // }}
          >
            <Typography
              className="typo"
              sx={{
                color: "yellow",
                textTransform: "capitalize",
              }}
            >
              Search
            </Typography>
          </Button>
        </div>
      </Stack>
    </>
  );
}

// Top 13 Research dummies
const topResearch = [
  { search: "Medical" },
  { search: "Housing" },
  { search: "Transport" },
  { search: "Legal" },
  { search: "Borders" },
  { search: "Animals" },
  { search: "Woman" },
  { search: "Children" },
  { search: "Admin" },
  { search: "Donations" },
  { search: "Peace" },
  { search: "Jobs" },
  { search: "Border" },
];
