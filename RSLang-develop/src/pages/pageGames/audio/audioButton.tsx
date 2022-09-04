import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Button from '@mui/material/Button';
import { getAllWords } from "../../../api/api";
import { IWord } from '../constants';
import { items } from "../mainPageGames";
import './style.css';

const getwordsCollection = async (): Promise<IWord[]> => {
    const res = await getAllWords(items.group, items.page);
    return res;
}

const AudioButton = (props: { random: IWord | undefined }) => {
    const url = 'https://react-learnwords-rslangg.herokuapp.com';
    const [wordAudio, setWordAudio] = useState<string | undefined>(props.random?.audio);
    useEffect(() => {
        getwordsCollection().then(() => {
            setWordAudio(props.random?.audio);
        });
    }, []);
    const playAudio = () => {
        if (wordAudio === undefined) {
            setWordAudio(props.random?.audio);
        } else {
            const audioPlay = new Audio(`${url}/${wordAudio}`);
            audioPlay.play();
        }
    }
    useEffect(() => {
    if (!wordAudio) {
        playAudio();
    } 
}, []);
    return (
        <Container maxWidth="sm" style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained" color="warning" onClick={playAudio} style={{width: '120px', height: '120px', borderRadius: '50%'}}><VolumeUpIcon></VolumeUpIcon></Button>
        </Container>
    )
}

export default AudioButton;