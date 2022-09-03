import React, { useState, useEffect, useRef } from "react";
import Modal from "./modal";
import { ScoreCount } from '../constants';

const Timer = (props: ScoreCount) => {
    const time = 2000;
    const interval = 1000;

    const [isOpen, setIsOpen] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [counter, setCounter] = useState(2);
    const timer = useRef<{initialTime: number, timer: ReturnType<typeof setInterval> | null}>({initialTime: 0, timer: null});

    useEffect(() => {
        if (gameStarted) {
            timer.current.initialTime = Date.now();
            timer.current.timer = setInterval(() => {
                if ((Date.now() - timer.current.initialTime) >= time) {
                    setIsOpen(true);
                    timer.current.timer && clearInterval(timer.current.timer)
                }
            }, interval);
        }
    }, [gameStarted]);

    useEffect(() =>{
      if (counter > 0){
        setTimeout(()=>setCounter(counter - 1), 1000);
        setGameStarted(true)
      }
    },[counter]);

    useEffect(() => () => {
        timer.current.timer && clearInterval(timer.current.timer);
    }, []);


    return (
        <>
            <p style={{margin: 'auto', fontSize: '40px'}}>{counter}</p>
            {isOpen && <Modal scoreCount={props.scoreCount}/>}
        </>
    )
};

export default Timer;
