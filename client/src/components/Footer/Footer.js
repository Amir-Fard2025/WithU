import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
//import Link from "@mui/material/Link";
import { Button, Grid, Link, Typography } from "@mui/material";

export default function Footer({ setOpen }) {
  // const [openContactForm, setOpenContactForm] = useState(false);

  const openContactModal = () => {
    console.log("modal clicked fromat footer");
    setOpen(true);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "60px",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: "transparent",
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
                  <Link href="/faq" underline="none" color="black">
                    FAQ
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                onClick={openContactModal}
                //sx={{ textDecoration: "underline" }}
              >
                Contact Us
              </Button>

              {/* <Grid>email@email.email</Grid> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
