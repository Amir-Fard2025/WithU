import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const style = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required.").email("Email is valid."),
    password: Yup.string()
      .required("Password is required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match."
    ),
  });

  //handleSubmit fce receives form data if the form validation is successful
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) }); // validates inputs one by one

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={style.inputFields}>
      <TextField
        placeholder="E-mail"
        name="userEmail"
        label="E-mail"
        required
        // {...register("email")}
        // error={errors.email ? true : false}
        // helperText={errors.email?.message}
        sx={{ marginTop: "1rem" }}
      />
      <TextField
        placeholder="Password"
        name="userPassword"
        label="Password"
        required
        // {...register("password")}
        // error={errors.password ? true : false}
        // helperText={errors.password?.message}
        sx={{ marginTop: "1rem" }}
      />
      <Button variant="contained" sx={{ marginTop: "1rem" }}>
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;
