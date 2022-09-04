import React, { useState } from "react";
import { ScoreCount } from '../constants';
import { audioResultRight, audioResultWrong } from '../constants';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { Link } from "react-router-dom";

const Modal = (props: ScoreCount) => {
  const listRight = audioResultRight.map((item) => {
    return <ListItem>{item.wordEngl}</ListItem>
  });
  const listWrong = audioResultWrong.map((item) => {
    return <ListItem>{item.wordEngl}</ListItem>
  });
  const playAgain = () => {
    document.location.reload();
  }
  const closeGame = () => {}
  return (
    <Card style={{zIndex: '10', width: '400px', height: '500px', position: 'absolute', top: 'calc(50vh - 250px)', left: 'calc(50% - 200px)', overflowY: 'auto'}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Вы набрали {props.scoreCount} очков
        </Typography>
        <Typography variant="h5" component="h2">
          Правильных ответов {audioResultRight.length}
        </Typography>
        <List>{listRight}</List>
        <Typography variant="h5" component="h2">
          Неправильных ответов {audioResultWrong.length}
        </Typography>
        <List>{listWrong}</List>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around'}}>
        <Button variant="contained" color="success" onClick={playAgain}>play again</Button>
        <Button variant="contained" color="warning" onClick={closeGame}>
          <Link to={'/games'}>close</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Modal;