import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
// import Autocomplete from "@mui/material/Autocomplete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "white",
  opacity: "0.9",
  border: "0px solid",
  borderRadius: "20px",
  p: 4,
};

const field = {
  width: 400,
};

const button = {
  direction: "row",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
  position: "absolute",
  left: "50%",
  top: "70%",
  width: "60px",
  // color: "rgba(66, 133, 244, 0.624)",
  transform: "translate(-50%, -50%)",
  backgroundColor: "transparent",
  border: "solid",
  borderColor: "rgba(66, 133, 244, 0.624)",
  hover: "scale(1.1)",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [personLanguage, setPersonLanguage] = React.useState([]);
  const [tags, setTag] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangement = (event1) => {
    const {
      target: { value },
    } = event1;
    setTag(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="divdiv">
      <Fab
        className="styling"
        aria-label="add"
        onClick={handleOpen}
        style={button}
      >
        Add
        {/* <AddIcon className="iconModal" /> */}
      </Fab>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={field}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          <TextField
            sx={field}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
          <TextField
            sx={field}
            id="outlined-basic"
            label="URL"
            variant="outlined"
          />

          <FormControl sx={{ width: 400 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={tags}
              onChange={handleChangement}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {allTags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  <Checkbox checked={tags.indexOf(tag) > -1} />
                  <ListItemText primary={tag} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 400 }}>
            <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personLanguage}
              onChange={handleChange}
              input={<OutlinedInput label="Language" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  <Checkbox checked={personLanguage.indexOf(language) > -1} />
                  <ListItemText primary={language} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={topLabel}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Tags" />}
          /> */}
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
          /> */}
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" endIcon={<SendIcon />}>
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

const allTags = [
  "Ukraine",
  "Children",
  "Finance",
  "Shelters",
  "Germany",
  "Animals",
  "Refugees",
  "Medical",
  "Transport",
  "Border",
  "Stay",
  "Legal",
  "Place",
  "Help",
];

const languages = ["English", "French", "German", "Polish", "Ukrainian"];
