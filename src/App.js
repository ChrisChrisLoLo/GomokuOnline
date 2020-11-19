import React from 'react';
import './App.css';
import Game from './components/game/Game';
import gameStyle from './components/game/Game.module.css'

function App() {
    return (
        <div className={gameStyle.center}>
            <h3 style={{ textAlign: 'center' }}>
                Gomoku Online
            </h3>
            <Game />
        </div>
    );
}

export default App;
