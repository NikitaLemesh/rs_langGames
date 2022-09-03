import React from "react";
import MediaCard from './mainPageGames';
import games from './constants';
import Container from '@mui/material/Container'

const RenderMain = () => {
  return (
    <Container maxWidth="sm" style={{display: 'flex', gap: '40px', alignContent: 'center'}}>
      <MediaCard
        id={games[0].id}
        image={games[0].image}
        name={games[0].name}
        description={games[0].description}
        page={games[0].page}
      />
      <MediaCard 
        id={games[1].id}
        image={games[1].image}
        name={games[1].name}
        description={games[1].description}
        page={games[1].page}
      />
    </Container>
  )
}

export default RenderMain;