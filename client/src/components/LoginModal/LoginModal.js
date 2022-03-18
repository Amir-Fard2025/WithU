import React from "react";
//import { useState } from "react";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";

const LoginModal = ({ open, onClose }) => {
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Box sx={style.inputFields}>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
        </Box>
      </Box>
    </Modal>
  );
};
export default LoginModal;
