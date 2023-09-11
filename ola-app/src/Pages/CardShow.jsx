import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardShow = ({ ele }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={ele.name}
        height="140"
        image={ele.image}
      />
      <CardContent >
        <Typography fontWeight={700} gutterBottom variant="h5" component="div">
          {ele.name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {ele.category}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {ele.description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {ele.location}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {ele.postedAt}
        </Typography>
        <Typography>Rs. {ele.price} /-</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>
  )
}

export default CardShow
