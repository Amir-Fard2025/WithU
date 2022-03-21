import * as React from "react";
import { Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function NestedList() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick = (val) => {
    if (val === "FAQ1") {
      setOpen1(!open1);
    } else if (val === "FAQ2") {
      setOpen2(!open2);
    } else if (val === "FAQ3") {
      setOpen3(!open3);
    } else if (val === "FAQ4") {
      setOpen4(!open4);
    }
  };

  return (
    <>
      <Stack
        className="stack"
        spacing={3}
        sx={{
          width: "50%",
          paddingTop: "5%",
          marginLeft: "25%",
        }}
      >
        <ListItemButton onClick={() => handleClick("FAQ1")}>
          <ListItemText primary="FAQ1" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="This page is about I am Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis aliquid perferendis magni nam, nihil explicabo ea!." />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick("FAQ2")}>
          <ListItemText primary="FAQ2" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="This page is about I am Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis aliquid perferendis magni nam, nihil explicabo ea!." />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick("FAQ3")}>
          <ListItemText primary="FAQ3" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="This page is about I am Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis aliquid perferendis magni nam, nihil explicabo ea!." />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick("FAQ4")}>
          <ListItemText primary="FAQ4" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="This page is about I am Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis aliquid perferendis magni nam, nihil explicabo ea!." />
            </ListItemButton>
          </List>
        </Collapse>
      </Stack>
    </>
  );
}
