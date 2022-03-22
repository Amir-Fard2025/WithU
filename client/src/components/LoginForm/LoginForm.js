import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";

const LoginForm = () => {
  const style = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setUserFormData({ ...userFormData, [name]: value });
  };
  console.log(userFormData);

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
        sx={{ marginTop: "1rem" }}
        value={userFormData.email}
        onChange={handleInputChange}
      />
      <TextField
        placeholder="Password"
        name="password"
        label="Password"
        required
        sx={{ marginTop: "1rem" }}
        value={userFormData.password}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        sx={{ marginTop: "1rem" }}
        onClick={handleFormSubmit}
      >
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;
