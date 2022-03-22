import * as React from "react";
import { Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const typographyStyle = {
  color: "#2979ff",
  "&:hover": {
    backgroundColor: "#ffffa3",
    opacity: "70%",
    borderRadius: "20px",
  },
};

export default function NestedList() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick = (val) => {
    if (val === "FAQ1") {
      setOpen1(!open1);
    } else if (val === "FAQ2") {
      setOpen2(!open2);
    } else if (val === "FAQ3") {
      setOpen3(!open3);
    } else if (val === "FAQ4") {
      setOpen4(!open4);
    } else if (val === "FAQ5") {
      setOpen5(!open5);
    }
  };

  return (
    <>
      <Typography component="div">
        <Box sx={{ paddingTop: "12%" }}>
          <Stack
            className="stack"
            spacing={3}
            sx={{
              width: "50%",
              marginLeft: "25%",
              // backgroundColor: "white",
              // opacity: "60%",
              // border: 1,
              // borderColor: "white",
              borderRadius: "20px",
              padding: 0,
            }}
          >
            <ListItemButton
              sx={typographyStyle}
              onClick={() => handleClick("FAQ1")}
            >
              <ListItemText primary="About WithU" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary="WithU is a place, where people can share useful links to people who are affected by the Ukraine crisis and to people who feel like contributing to a crowdsourced platform to increase the accessibility to useful sources." />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              sx={typographyStyle}
              onClick={() => handleClick("FAQ2")}
            >
              <ListItemText primary="Contribution requirements - quality" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary="We invite you, as contributor, to fill the platform with web resources related to the given tags. You need to have an account on WithU to be able to add resources for the community. Please make sure to pre-check the source. Is it a trustable source? Does the web content support anyone related to the Ukraine crisis? Doesn't the source offer any paid services or have a misleading data collection purpose?" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              sx={typographyStyle}
              onClick={() => handleClick("FAQ3")}
            >
              <ListItemText primary="Community experience" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary="A ranking for a positive experience level is included as well. This will motivate the user and contributors to signal their standing within the platform’s community and the quality of the information." />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              sx={typographyStyle}
              onClick={() => handleClick("FAQ4")}
            >
              <ListItemText primary="Netiquette" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary="Help WithU to display high quality sources with all the requested information on the adding template. WithU reserves the right to delete web resources at any time without notice, if the content doesn’t follow the contribution requirements." />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              sx={typographyStyle}
              onClick={() => handleClick("FAQ5")}
            >
              <ListItemText primary="Contact us" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary="Feel free to get in touch, if you have any questions or if you would like to leave us any feedback." />
                </ListItemButton>
              </List>
            </Collapse>
          </Stack>
        </Box>
      </Typography>
    </>
  );
}
