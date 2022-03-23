import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, Grid, Link, Typography } from "@mui/material";

export default function Footer({ setOpen }) {
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
            <Grid sx={{ fontSize: "15px" }} item xs={12} md={10}>
              © WithU 2022
            </Grid>
            <Grid item xs={1} md={1}>
              <Box sx={{ color: "black" }}>
                <Typography sx={{ textAlign: "center" }} component="div">
                  <Link
                    href="/faq"
                    underline="none"
                    fontSize="15px"
                    fontWeight="500"
                    color="black"
                  >
                    FAQ
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={1}>
              <Button
                sx={{ color: "black", textTransform: "none", fontSize: "15px" }}
                onClick={openContactModal}
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
