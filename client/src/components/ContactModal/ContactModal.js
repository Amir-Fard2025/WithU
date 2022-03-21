import React from "react";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

const ContactModal = ({ open, onClose }) => {
  const style = {
    modalStyles: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      opacity: "0.7",
      border: "0px solid",
      borderRadius: "20px",
      color: "black",
      boxShadow: 24,
      p: 4,
    },
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.modalStyles}>
        <Box sx={style.inputFields}>
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
          <Button variant="contained" sx={{ marginTop: "1rem" }}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default ContactModal;
