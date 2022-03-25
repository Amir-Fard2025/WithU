import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import Auth from "../../utils/auth";
import { ADDUSER } from "../../utils/mutations";

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

const SignupForm = () => {
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
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [hiddenConfirmedPassword, setHiddenConfirmedPassword] = useState("");

  const [addUser] = useMutation(ADDUSER);

  const validateInput = (currPassowrd, currConfirmPassword, email) => {
    if (
      currPassowrd &&
      currPassowrd.length > 0 &&
      currPassowrd == currConfirmPassword
    ) {
      // validate email
      if (
        email &&
        email.length > 0 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        return true;
      }
      return false;
    }
    return false;
  };
  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    setValidated(validateInput(password, confirmedPassword, value));
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

    setValidated(
      validateInput(newPassword, confirmedPassword, userFormData.email)
    );
  };

  const handleConfirmedPasswordChange = (event) => {
    const { name, value } = event.target;
    const newPassword = confirmedPassword + value.split("").pop();
    setConfirmedPassword(newPassword);
    setUserFormData({ ...userFormData, confirmedPassword: newPassword });
    const cryptedPassword = value
      .split("")
      .map(() => "*")
      .join("");
    setHiddenConfirmedPassword(cryptedPassword);
    setValidated(validateInput(password, newPassword, userFormData.email));
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
      <TextField
        placeholder="Password"
        name="password"
        label="Confirm password"
        required
        sx={styleField}
        value={hiddenConfirmedPassword}
        onChange={handleConfirmedPasswordChange}
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
        Send
      </Button> */}
    </Box>
  );
};

export default SignupForm;
