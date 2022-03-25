import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
// import Autocomplete from "@mui/material/Autocomplete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADDRESOURCE } from "../../utils/mutations";
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

import Auth from "../../utils/auth";
import "./Modal.css";

const styleFirstLogin = {
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  opacity: "0.7",
  borderRadius: "10px",
  color: "#2874A6",
  fontFamily: "Roboto",
  fontSize: "calc(5px + 2vw)",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "white",
  opacity: "0.9",
  border: "0px solid",
  borderRadius: "20px",
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 3,
  paddingRight: 3,
};

const styleField = {
  width: 400,
  marginBottom: "20px",
  color: "#0288d1",
  "& fieldset": {
    borderRadius: "20px",
  },
};

const styleDropdown = {
  width: 400,
  marginBottom: "20px",
  "& fieldset": {
    borderRadius: "20px",
  },
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

const styleFab = {
  marginTop: "95px",
  color: "#0288d1",
  textTransform: "capitalize",
  "&:hover": {
    color: "#0288d1",
    opacity: "70%",
  },
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

  // how to handle the arrays here?
  const [userFormData, setUserFormData] = useState({
    title: "",
    description: "",
    url: "",
    tag_id: "",
    language: "",
  });
  const [validated, setValidated] = useState(false);

  const [addResourcesCard] = useMutation(ADDRESOURCE);

  const validateInput = (currTitle) => {
    if (currTitle && currTitle.length > 0) {
      return true;
    }
    return false;
  };
  // const handleTitleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setUserFormData({ ...userFormData, [name]: value });
    setValidated(validateInput(value));
  };
  console.log(userFormData); // each char goes on a separate line

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!userFormData) {
      return;
    }

    try {
      const res = await addResourcesCard({
        variables: {
          ...userFormData,
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      title: "",
      description: "",
      url: "",
      tag_id: "",
      language: "",
    });
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
          {Auth.loggedIn() ? (
            <>
              <TextField
                sx={styleField}
                id="outlined-basic"
                name="title"
                label="Title"
                variant="outlined"
                required
                value={userFormData.title}
                onChange={handleInputChange}
              />
              <TextField
                sx={styleField}
                id="outlined-basic"
                name="description"
                label="Description"
                variant="outlined"
                required
                value={userFormData.description}
                onChange={handleInputChange}
              />
              <TextField
                sx={styleField}
                id="outlined-basic"
                name="url"
                label="URL"
                variant="outlined"
                required
                value={userFormData.url}
                onChange={handleInputChange}
              />

              <FormControl sx={styleDropdown} required>
                <InputLabel
                  sx={styleDropdown}
                  id="demo-multiple-checkbox-label"
                >
                  Tag
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  name="tag_id"
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
              <FormControl sx={styleDropdown}>
                <InputLabel id="demo-multiple-checkbox-label" required>
                  Language
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  name="language"
                  multiple
                  value={personLanguage}
                  onChange={handleChange}
                  input={<OutlinedInput label="Language" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                      <Checkbox
                        checked={personLanguage.indexOf(language) > -1}
                      />
                      <ListItemText primary={language} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <>
                <Fab
                  sx={styleFab}
                  onClick={handleFormSubmit}
                  disabled={!validated}
                  style={button}
                >
                  Add
                </Fab>
              </>
            </>
          ) : (
            <Typography sx={styleFirstLogin} id="demo-multiple-checkbox-label">
              Login / Sign Up first and contribute :)
            </Typography>
          )}
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
