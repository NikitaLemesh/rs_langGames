import React from "react";
import { IWord } from '../constants';
import Container from '@mui/material/Container';
import AudioButton from "./audioButton";
import { Typography } from "@mui/material";

const ShowAnswer = (props: { item: IWord | undefined }) => {
    const url = 'https://react-learnwords-rslangg.herokuapp.com';
    return (
        <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={`${url}/${props.item?.image}`} alt={props.item?.wordTranslate} style={{ height: '150px', width: '150px', borderRadius: '50%', marginBottom: '50px' }}/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AudioButton random={props.item} />
                <Typography>{props.item?.wordTranslate}</Typography>
            </div>
        </Container>
    )
}

export default ShowAnswer;