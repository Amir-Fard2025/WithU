import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "white",
  opacity: "0.7",
  border: "0px solid",
  borderRadius: "20px",
  color: "white",
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
  transform: "translate(-50%, -50%)",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Fab color="info" aria-label="add" onClick={handleOpen} style={button}>
        <AddIcon />
      </Fab>
      <Modal
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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={topLabel}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Tags" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
        </Box>
      </Modal>
    </div>
  );
}

const topLabel = [
  { label: "Ukraine" },
  { label: "Children" },
  { label: "Finance" },
  { label: "Shelters" },
  { label: "Germany" },
  { label: "Animals" },
  { label: "Refugees" },
  {
    label: "Medical",
  },
  { label: "Transport" },
  { label: "Border" },
  {
    label: "Stay",
  },
  {
    label: "Legal",
  },
  { label: "Place" },
  { label: "Help" },
];

const languages = [
  { label: "English" },
  { label: "German" },

  { label: "Ukrainian" },
  { label: "Polish" },
  { label: "French" },
];
