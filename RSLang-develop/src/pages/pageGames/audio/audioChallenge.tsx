import React, { useState, useEffect } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { items } from "../mainPageGames";
import { getAllWords } from "../../../api/api";
import { createInstance } from "react-async";
import { IWord } from '../constants';
import ShowAnswer from './ShowAnswer';
import AudioButton from './audioButton';

const getwordsCollection = async (): Promise<IWord[]> => {
  const res = await getAllWords(items.group, items.page);
  return res;
}
const AsyncPlayer = createInstance({ promiseFn: getwordsCollection }, "AsyncPlayer");
const MyComponent = React.memo((props: {rusWord: string}) => {
  return (
    <AsyncPlayer>
      <AsyncPlayer.Fulfilled>{props.rusWord}</AsyncPlayer.Fulfilled>
    </AsyncPlayer>
  )
})

export const randomNumber = (): number[] => {
  const nums: Set<number> = new Set();
  while (nums.size < 4) {
      nums.add(Math.floor(Math.random() * 19));
  }
  return Array.from(nums);
}
export const oneOfFore = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

const AudioChallenge = () => {
  const [word, setWord] = useState<IWord>();
  const [words, setWords] = useState<IWord[] | undefined>();
  const [details, setDetails] = useState(false);

  useEffect(() => {
      getwordsCollection().then((res) => {
        const array = randomNumber().map((item) => {
          const result = res[item];
          return result;
        })
        return array;
      }).then((data) => {
        setWord(data[oneOfFore]);
        setWords(data);
      });
  }, []);
  const chooseValue = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    if(target.textContent === word?.wordTranslate) {
      console.log('lalala');
    } else {
      console.log('blablabla');
    }
  }
  const showAnswer = () => {
    setDetails(true);
  }
  return (
    <Container maxWidth="sm" style={{ height: '400px', width: '600px', position: 'absolute', top: 'calc(50vh - 200px)', left: 'calc(50% - 300px)' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
          {!details && <AudioButton random={word} />}
          {details && <ShowAnswer item={word}/>}
          <Container style={{ display: 'flex', margin: 'auto', gap: '30px', marginTop: '50px' }}>
            {words?.map((item, index) => <Button color="secondary" onClick={chooseValue} key={index}><MyComponent rusWord={item.wordTranslate} /></Button>)}
          </Container>
        </CardContent>
        <CardActions>
          {!details && <Button variant="contained" color="warning" id='btn-answer' onClick={showAnswer} style={{ width: '150px', margin: 'auto' }}>answer</Button>}
          {details && <Button variant="contained" color="warning" id='btn-next' onClick={showAnswer} style={{ width: '150px', margin: 'auto' }}>next</Button>}  
        </CardActions>
    
    </Container>
  )
}

export default AudioChallenge;
