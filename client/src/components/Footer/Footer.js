import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Link from "@mui/material/Link";
import { Grid, Link, Typography } from "@mui/material";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Box>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              © WithU 2022
            </Grid>
            <Grid item xs={1} md={3}>
              <Box sx={{ color: "black" }}>
                <Typography sx={{ textAlign: "center" }} component="div">
                  <Link href="/" underline="none" color="black">
                    FAQ
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid sx={{ textDecoration: "underline" }}>Contact: </Grid>
              <Grid>Address</Grid>
              <Grid>email@email.email</Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}