import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import FlagCircleRoundedIcon from "@mui/icons-material/FlagCircleRounded";
import { positions } from "@mui/system";

const styleCard = {
  maxWidth: 345,
  borderRadius: "20px",
  boxShadow: 2,
  margin: 2,
  backgroundColor: "transparent",
  border: 1,
  borderColor: "yellow",
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
  marginTop: "50px",
  border: 1,
  borderRadius: "20px",
};

export default function MediaCard({
  title,
  description,
  screenshot,
  language,
}) {
  return (
    <Card sx={styleCard}>
      <div>
        <CardMedia
          sx={styleMediaCard}
          component="img"
          height="140"
          image={"screenshots/" + title.toLowerCase().replace(" ", "") + ".png"}
          alt="website image"
        />
      </div>
      <CardContent sx={styleCardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Input defaultValue="Hello world" inputProps={} />
      <FlagCircleRoundedIcon />
      <FlagCircleRoundedIcon />
      <FlagCircleRoundedIcon />
    </Card>
  );
}
