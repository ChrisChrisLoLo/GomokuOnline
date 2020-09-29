import React from 'react';
import './App.css';
import Game from './components/game/Game';
import Container from "reactstrap/lib/Container";

function App() {
  return (
    <Container>
      <h3>Gomoku Online</h3>
      <Game/>
    </Container>
  );
}

export default App;
