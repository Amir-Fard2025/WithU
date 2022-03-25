import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";

const styleField = {
  marginTop: "1rem",
  color: "#0288d1",
  "& fieldset": {
    borderRadius: "20px",
  },
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

const LoginForm = () => {
  const style = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState("");

  const [login] = useMutation(LOGIN);

  const validateInput = (currPassowrd, email) => {
    if (
      currPassowrd &&
      currPassowrd.length > 0 &&
      email &&
      email.length > 0 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      return true;
    }
    return false;
  };

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    setValidated(validateInput(password, value));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    const newPassword = password + value.split("").pop();
    setPassword(newPassword);
    setUserFormData({ ...userFormData, password: newPassword });
    const cryptedPassword = value
      .split("")
      .map(() => "*")
      .join("");
    setHiddenPassword(cryptedPassword);
    setValidated(validateInput(newPassword, userFormData.email));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const res = await login({
        variables: {
          ...userFormData,
        },
      });
      const { token } = res.data.login;

      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={style.inputFields}>
      <TextField
        placeholder="E-mail"
        name="email"
        label="E-mail"
        required
        sx={styleField}
        value={userFormData.email}
        onChange={handleEmailChange}
      />
      <TextField
        placeholder="Password"
        name="password"
        label="Password"
        required
        sx={styleField}
        value={hiddenPassword}
        onChange={handlePasswordChange}
      />
      <Fab
        sx={styleFab}
        onClick={handleFormSubmit}
        disabled={!validated}
        // style={button}
      >
        Send
      </Fab>
      {/* <Button
        variant="contained"
        sx={{ marginTop: "1rem" }}
        onClick={handleFormSubmit}
        disabled={!validated}
      >
        Log In
      </Button> */}
    </Box>
  );
};

export default LoginForm;
