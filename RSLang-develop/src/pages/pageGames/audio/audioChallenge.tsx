import React, { useState, useEffect } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { items } from "../mainPageGames";
import { getAllWords } from "../../../api/api";
import { createInstance } from "react-async";
import { IWord, GameResult, audioResultRight, audioResultWrong } from '../constants';
import ShowAnswer from './ShowAnswer';
import AudioButton from './audioButton';
import Typography from '@mui/material/Typography';
import Modal from "./modal";

const getwordsCollection = async (): Promise<IWord[]> => {
  const res = await getAllWords(items.group, items.page);
  return res;
}
const AsyncPlayer = createInstance({ promiseFn: getwordsCollection }, "AsyncPlayer");
const MyComponent = React.memo((props: { rusWord: string }) => {
  return (
    <AsyncPlayer style={{ padding: '10px' }}>
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
export const oneOfFore = () =>  Math.floor(Math.random() * (4 - 0)) + 0;

const AudioChallenge = () => {
  const [word, setWord] = useState<IWord>();
  const [words, setWords] = useState<IWord[] | undefined>();
  const [details, setDetails] = useState(false);
  let [counter, setCounter] = useState(0);
  let [limit, setLimit] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [randomIndex, setRandomIndex] = useState(oneOfFore())

  const addItemToArray = (array: GameResult[]) => {
    array.push({ wordEngl: word?.word, translate: word?.wordTranslate, audioRightWord: word?.audio});
  }
  const addCounter = () => {
    counter += 1;
  }

  const checkLimit = () => {
    limit += 1;
  }
  useEffect(() => {
    getwordsCollection().then((res) => {
      const array = randomNumber().map((item) => {
        const result = res[item];
        return result;
      })
      return array;
    }).then((data) => {
      setWord(data[randomIndex]);
      setWords(data);
    });
  }, []);
  const chooseValue = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    if (target.textContent === word?.wordTranslate) {
      target.style.backgroundColor = 'green';
      setDetails(true);
      addCounter();
      checkLimit();
      setLimit(limit);
      setCounter(counter);
      addItemToArray(audioResultRight);
      setRandomIndex(oneOfFore());
      if (limit === 16) {
        setIsOpen(true);
      }
      setTimeout(() => {
        target.style.backgroundColor = '#7FBCD2';
      }, 2000)
    } else {
      target.style.backgroundColor = "red";
      setDetails(true);
      checkLimit();
      setLimit(limit);
      setCounter(counter);
      addItemToArray(audioResultWrong);
      setRandomIndex(oneOfFore());
      if (limit === 16) {
        setIsOpen(true);
      }
      setTimeout(() => {
        target.style.backgroundColor = '#7FBCD2';
      }, 2000);
    }
  }
  const showAnswer = () => {
    setDetails(true);
  }
  const getNextWord = () => {
    getwordsCollection().then((res) => {
      const array = randomNumber().map((item) => {
        const result = res[item];
        return result;
      })
      return array;
    }).then((data) => {
      setWord(data[randomIndex]);
      setWords(data);
    }).then(() => {
      setDetails(false);
    })
  }
  return (
    <div style={{margin: '0', width: '100vw', height: '100vh', backgroundColor: '#A5F1E9' }}>
      <Container maxWidth="sm" style={{ height: '400px', width: '600px', position: 'absolute', top: 'calc(50vh - 200px)', left: 'calc(50% - 300px)' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
          {!details && <AudioButton random={word} />}
          {details && <ShowAnswer item={word} />}
          <Container style={{ display: 'flex', margin: 'auto', gap: '30px', marginTop: '50px' }}>
            {words?.map((item) => <Button color="secondary" style={{ backgroundColor: '#7FBCD2' }} onClick={chooseValue} key={item.id} ><MyComponent rusWord={item.wordTranslate} /></Button>)}
          </Container>
        </CardContent>
        <CardActions>
          {!details && <Button variant="contained" color="warning" id='btn-answer' onClick={showAnswer} style={{ width: '150px', margin: 'auto' }}>answer</Button>}
          {details && <Button variant="contained" color="warning" id='btn-next' onClick={getNextWord} style={{ width: '150px', margin: 'auto' }}>next</Button>}
        </CardActions>
        <Typography style={{marginLeft: 'calc(50% - 40px)', fontSize: '30px', color: '#C67ACE'}}>{`${counter} / 15`}</Typography>
        {isOpen && <Modal scoreCount={counter} />}
      </Container>
    </div>
  )
}

export default AudioChallenge;
