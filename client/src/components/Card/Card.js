import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
// import FlagCircleRoundedIcon from "@mui/icons-material/FlagCircleRounded";
// import { positions } from "@mui/system";
import Flags from "country-flag-icons/react/3x2";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcone from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Card.css";
// import { LikeButton } from "@lyket/react";

const styleCard = {
  marginTop: "120px",
  maxWidth: "400px",
  maxHeight: "300px",
  minWidth: "30%",
  borderRadius: "20px",
  boxShadow: 2,
  backgroundColor: "transparent",
  border: 1,
  borderColor: "yellow",
  backgroundColor: "rgba(255, 255, 255, 0.212)",
};

const circle = {
  backgroundColor: "transparent",
  margin: "5px",
  border: "solid",
  color: "rgba(255, 255, 0, 0.7)",
};

const styleCardContent = {
  backgroundColor: "white",
  padding: "10px",
  margin: "10px",
  borderRadius: "20px",
  opacity: "80%",
};

const styleMediaCard = {
  margin: "10px",
  marginTop: "10px",
  marginRight: "10px",
  padding: "10px",
  border: 1,
  borderColor: "yellow",
  borderRadius: "20px",
  maxWidth: "95%",
};

const styleFlag = {
  width: "2rem",
  height: "2rem",
  margin: "15px",
};

export default function MediaCard({
  title,
  description,
  screenshot,
  languages,
  like,
  url
}) {
  console.log(screenshot);
  const loggedIn = !!localStorage.getItem("id_token");

  return (
    <Card sx={styleCard}>

      <div
        className="twoIcons"
        style={{
          display: "left",
        }}
      >
        <Box></Box>
        {loggedIn && (
          <div className="icons">
            <Fab
              className="edit"
              size="small"
              sx={circle}
              aria-label="edit"
            // onClick={handleOpen}
            // style={button}
            >
              <FavoriteIcone className="like" />

              {/* <AddIcon className="iconModal" /> */}
            </Fab>
            <Fab
              className="edit"
              size="small"
              sx={circle}
              aria-label="edit"
            // onClick={handleOpen}
            // style={button}
            >
              <EditIcon className="edit" />

              {/* <AddIcon className="iconModal" /> */}
            </Fab>
            <Fab
              className="delete"
              size="small"
              sx={circle}
              aria-label="delete"
            // onClick={handleOpen}
            // style={button}
            >
              <DeleteIcon className="delete" />
              {/* <AddIcon className="iconModal" /> */}
            </Fab>
          </div>
        )}
      </div>
      <a href={url} style={{ textDecoration: "none" }}>
        <div>
          <CardMedia
            sx={styleMediaCard}
            component="img"
            height="140"
            image={screenshot}
            alt="website image"
          />
        </div>
        <CardContent sx={styleCardContent}>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
          }}
        >
          {languages.includes("Ua") && (
            <Box sx={styleFlag}>
              <Flags.UA title="ukraine" />
            </Box>
          )}
          {languages.includes("De") && (
            <Box sx={styleFlag}>
              <Flags.DE title="germany" />
            </Box>
          )}
          {languages.includes("En") && (
            <Box sx={styleFlag}>
              <Flags.GB title="england" />
            </Box>
          )}
          {languages.includes("Ru") && (
            <Box sx={styleFlag}>
              <Flags.RU title="russia" />
            </Box>
          )}
          {languages.includes("Pl") && (
            <Box sx={styleFlag}>
              <Flags.PL title="poland" />
            </Box>
          )}

          {/* <LikeButton
          id="how-to-reduce-footprint"
          namespace="post"
          component={LikeButton.themes.Twitter}
        /> */}
        </div>
      </a >
    </Card>
  );
}
