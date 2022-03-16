import React from "react";
import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Button,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  appBar: {
    borderBottom: "1px solid",
  },
  link: {
    margin: "10px",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

function ResponsiveNavbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={1}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link component={Link} to="/" underline="none" color="textPrimary">
              WithU
            </Link>
          </Typography>

          <Box sx={{ display: "flex" }}>
            <nav>
              <Link
                color="textPrimary"
                href="/"
                className={classes.link}
                component={Link}
              >
                Dashboard
              </Link>
            </nav>
            <Button
              to="/"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={Link}
            >
              Login
            </Button>
            <Button
              to="/"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={Link}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default ResponsiveNavbar;
