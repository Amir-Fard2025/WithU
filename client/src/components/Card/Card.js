import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';

export default function MediaCard({title, description}) {
    return (
    <Card sx={{ maxWidth: 345, borderRadius: 5, boxShadow: 2, margin: 2}}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="xxx"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <FlagCircleRoundedIcon/><FlagCircleRoundedIcon/><FlagCircleRoundedIcon/>
    </Card>
  );
}