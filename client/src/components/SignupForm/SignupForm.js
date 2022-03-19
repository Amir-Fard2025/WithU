import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";

const SignupForm = () => {
  const style = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <Box sx={style.inputFields}>
      <TextField
        placeholder="E-mail"
        name="userEmail"
        label="E-mail"
        required
        sx={{ marginTop: "1rem" }}
      />
      <TextField
        placeholder="Password"
        name="userPassword"
        label="Password"
        required
        sx={{ marginTop: "1rem" }}
      />
      <Button variant="contained" sx={{ marginTop: "1rem" }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignupForm;
