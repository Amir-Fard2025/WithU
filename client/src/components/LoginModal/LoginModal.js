import React, { useState } from "react";
//import { useState } from "react";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { Button } from "@mui/material";

const LoginModal = ({ open, onClose }) => {
  const [displayLoginForm, setDisplayLoginForm] = useState(true);

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
  };

  const styleButton = {
    textTransform: "capitalize",
    "&:hover": {
      color: "#0288d1",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.modalStyles}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <Button
            sx={styleButton}
            id="login-btn"
            onClick={() => setDisplayLoginForm(true)}
          >
            Log in
          </Button>
          <Button
            sx={styleButton}
            id="signup-btn"
            onClick={() => setDisplayLoginForm(false)}
          >
            Sign up
          </Button>
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please provide your credentials below:
        </Typography> */}
        {displayLoginForm ? <LoginForm /> : <SignupForm />}
        {/* {displayLoginForm ?  :} */}

        {/* <SignupForm /> */}
      </Box>
    </Modal>
  );
};
export default LoginModal;
