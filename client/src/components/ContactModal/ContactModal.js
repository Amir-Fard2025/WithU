import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";

const ContactModal = ({ open, onClose }) => {
  const style = {
    modalStyles: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "white",
      opacity: "0.9",
      border: "0px solid",
      borderRadius: "20px",
      color: "black",
      boxShadow: 24,
      p: 4,
    },
    inputFields: {
      display: "flex",
      flexDirection: "column",
      "& fieldset": {
        borderRadius: "20px",
      },
    },
  };

  const styleText = {
    textAlign: "center",
    // width: "40%",
    opacity: "0.7",
    borderColor: "transparent",
    borderRadius: "10px",
    // marginLeft: "30%",
    color: "#2874A6",
    // marginTop: "10px",
    fontFamily: "Roboto",
    fontSize: "calc(7px + 2vw)",
  };

  const styleFab = {
    marginTop: "20px",
    color: "#0288d1",
    backgroundColor: "transparent",
    textTransform: "capitalize",
    border: "solid",
    borderColor: "rgba(66, 133, 244, 0.624)",

    "&:hover": {
      color: "#0288d1",
      opacity: "70%",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.modalStyles}>
        <Box sx={style.inputFields}>
          <Typography sx={styleText}>
            Leave us a message :) <br /> We will get back to you ASAP!
          </Typography>
          <TextField
            placeholder="E-mail"
            name="userEmail"
            label="E-mail"
            required
            sx={{ marginTop: "1rem" }}
          />
          <TextField
            placeholder="Message"
            name="userMessage"
            label="Message"
            multiline
            rows={4}
            required
            sx={{ marginTop: "1rem" }}
          />
          <Fab
            sx={styleFab}

          >
            Send
          </Fab>

        </Box>
      </Box>
    </Modal>
  );
};
export default ContactModal;
