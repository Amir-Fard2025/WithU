import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import Auth from "../../utils/auth";
import { ADDUSER } from "../../utils/mutations";

const SignupForm = () => {
  const style = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADDUSER);

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
      const res = await addUser({
        variables: {
          ...userFormData,
        },
      });
      console.log(res);
      const { token } = res.data.addUser;

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
      <TextField
        placeholder="Password"
        name="password"
        label="Confirm password"
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupForm;
