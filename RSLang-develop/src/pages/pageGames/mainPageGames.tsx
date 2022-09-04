import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GamesNames } from "./constants";
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";

export const items = {
  group: 0,
  page: 0
}

export default function MediaCard(props: GamesNames) {
  const [level, setLevel] = useState<string | null>('1');
  const getLevel = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    setLevel(target.textContent);
  }

  const startGame = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    items.group = Number(level) - 1;
    items.page = Math.random() * 29;
  }
  return (
    <Card style={{display: 'flex', width: '300px', flexDirection: 'column', alignItems: 'center', marginTop: '100px', backgroundColor: '#EEEEEE' }} id={props.id}>
      <CardActionArea>
      <img style={{ width: '100%' }} src={props.image} alt={props.name}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
        Choose level
      </Typography>
      <ButtonGroup size="small" aria-label="small outlined button group" style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
        <ButtonGroup style={{ display: 'flex', gap: '5px' }}>
          <Button variant="contained" color="primary" onClick={getLevel}>1</Button>
          <Button variant="contained" color="primary" onClick={getLevel}>2</Button>
          <Button variant="contained" color="primary" onClick={getLevel}>3</Button>
        </ButtonGroup>
        <ButtonGroup style={{ display: 'flex', gap: '5px' }}>
          <Button variant="contained" color="primary" onClick={getLevel}>4</Button>
          <Button variant="contained" color="primary" onClick={getLevel}>5</Button>
          <Button variant="contained" color="primary" onClick={getLevel}>6</Button>
        </ButtonGroup>
      </ButtonGroup>
      <Typography gutterBottom variant="h6" component="h6" style={{padding: '0px', marginBottom: '10px', marginTop: '10px'}}>
        Level: {level}
      </Typography>
      <CardActions>
      <Button variant="contained" color="secondary" onClick={startGame} style={{padding: '0px'}}>
        <Link to={props.page} style={{borderRadius: '10px' , padding: '10px 20px', textDecoration: 'none'}}>Start</Link>
      </Button>
      </CardActions>
    </Card>
  );
}
