import React from "react";
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
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Modal = (props: ScoreCount) => {
  const listRight = audioResultRight.map((item) => {
    const url = 'https://react-learnwords-rslangg.herokuapp.com';
    const playAudio = () => {
        const audioPlay = new Audio(`${url}/${item.audioRightWord}`);
        audioPlay.play();
  }
    return (
      <ListItem style={{color: '#224B0C'}}>
        <Button color="warning" onClick={playAudio}><VolumeUpIcon></VolumeUpIcon></Button>
        <Typography>{`eng: ${item.wordEngl} rus: ${item.translate}`}</Typography>
      </ListItem>
    );
  });
  const listWrong = audioResultWrong.map((item) => {
    const url = 'https://react-learnwords-rslangg.herokuapp.com';
    const playAudio = () => {
        const audioPlay = new Audio(`${url}/${item.audioRightWord}`);
        audioPlay.play();
  }
    return (
      <ListItem style={{color: '#224B0C'}}>
        <Button color="warning" onClick={playAudio}><VolumeUpIcon></VolumeUpIcon></Button>
        <Typography>{`eng: ${item.wordEngl} rus: ${item.translate}`}</Typography>
      </ListItem>
    );
  });
  const playAgain = () => {
    document.location.reload();
  }
  const closeGame = () => {}
  return (
    <Card style={{zIndex: '10', width: '500px', height: '500px', position: 'absolute', top: '0px', left: 'calc(50% - 250px)', overflowY: 'auto', backgroundColor: '#7FB77E'}}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{color: '#224B0C'}}>
          Правильных ответов {audioResultRight.length}
        </Typography>
        <List>{listRight}</List>
        <Typography variant="h5" component="h2" style={{color: '#224B0C'}}>
          Неправильных ответов {audioResultWrong.length}
        </Typography>
        <List>{listWrong}</List>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around'}}>
        <Button variant="contained" color="success" onClick={playAgain}>play again</Button>
        <Button variant="contained" color="warning" onClick={closeGame}>
          <Link to={'/games'} style={{textDecoration: 'none', color: 'white'}}>close</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Modal;