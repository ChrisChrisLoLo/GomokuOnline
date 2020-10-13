import React from 'react';
import './App.css';
import Game from './components/game/Game';

function App() {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>
                Gomoku Online
            </h3>
            <Game />
        </div>
    );
}

export default App;
