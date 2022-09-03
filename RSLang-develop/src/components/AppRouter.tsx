import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Games } from '../pages/games';
import { Main } from '../pages/main';
import { Tutorial } from '../pages/tutorial';
import Sprint from '../pages/pageGames/sprint/sprint';
import AudioChallenge from '../pages/pageGames/audio/audioChallenge';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/games' element={<Games />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/games/sprint' element={<Sprint />} />
        <Route path='/games/audio' element={<AudioChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
