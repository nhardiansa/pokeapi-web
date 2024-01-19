import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type PokeCardProps = {
  url: string
  name: string
  btnHandler?: () => void
}

export default function PokeCard(props: PokeCardProps) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.url.split('/')[6] || 1}.png`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aliquam?
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.btnHandler} size="small">Detail</Button>
      </CardActions>
    </Card>
  );
}
