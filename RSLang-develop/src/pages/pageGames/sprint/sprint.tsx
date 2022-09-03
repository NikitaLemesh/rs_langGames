import React, { useEffect, useState } from "react";
import { items } from "../mainPageGames";
import { getAllWords } from "../../../api/api";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Timer from './timer';
import { sprintResultRight, SprintResult, sprintResultWrong } from '../constants';

const Sprint = () => {
  let [score, setScore] = useState(0);
  const [word, setWords] = useState();
  const [toRus, setTranslate] = useState();
  const [number, setNumber] = useState(0);
  const [numberTranslate, setnumberTranslate] = useState(0);
  const addScore = () => {
    score += 10;
  }
  const addItemToArray = (array: SprintResult[]) => {
    array.push({wordEngl: word, translate: toRus});
  }
  const randomItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const oneOrZero = Math.round(Math.random());
    if (target.id === 'btn-right') {
      if (number === numberTranslate) {
        addScore();
        setScore(score);
        addItemToArray(sprintResultRight);
      } else {
        addItemToArray(sprintResultWrong);
      }
    } else if (target.id === 'btn-wrong') {
      if (number !== numberTranslate) {
        addScore();
        setScore(score);
        addItemToArray(sprintResultRight);
      } else {
        addItemToArray(sprintResultWrong);
      }
    }
    const randomNumberWord = Math.floor(Math.random() * 19);
    const randomNumberTranslate = Math.floor(Math.random() * 19);
    oneOrZero ? setnumberTranslate(randomNumberWord) : setnumberTranslate(randomNumberTranslate);
    setNumber(randomNumberWord);
  }
   const getwordsCollection = async () => {
      const res = await getAllWords(items.group, items.page);
      setTranslate(res[numberTranslate].wordTranslate);
      setWords(res[number].word);
    }
  useEffect(() => {
    getwordsCollection();
  }, [])
  console.log('aa');
  return (
    <Container maxWidth="sm" style={{display: 'flex', gap: '40px', alignContent: 'center', flexDirection: 'column', marginTop: '200px '}}>
      <Typography variant="h5" component="h2" style={{ margin: 'auto' }}>
          Текущий результат {score}
        </Typography>
      <Card style={{display: 'flex', width: '300px', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word}
          </Typography>
          <Typography variant="h6" component="h3" style={{marginBottom: '20px'}}>
            {toRus}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', gap: '40px'}}>
          <Button variant="contained" color="success" onClick={randomItem} id='btn-right'>right</Button>
          <Button variant="contained" color="warning" onClick={randomItem} id='btn-wrong'>wrong</Button>
        </CardActions>
      </Card>
      <Timer scoreCount={score} />
    </Container>
  )
}
export default Sprint;