import React from "react";
import { Button, Input } from "reactstrap";

import { gameModes } from "../../logic/gameModes";

export default function Settings(props) {
    let options = [];
    for (let gameModeName in gameModes) {
        options.push(<option key={gameModeName}>{gameModeName}</option>)
    }

    function handleChange(e) {
        props.configureGame(e.target.value, gameModes[e.target.value]);
    }

    return (
        <div>
            <div style={{marginBottom:'30px'}}>
                <h4>Options</h4>
                <Button onClick={() => props.resetGame(props.board.length)}>Reset</Button>
            </div>
            <div style={{marginBottom:'30px'}}>
                <h4>Game configuration</h4>
                <Input type='select' name='gameMode' onChange={handleChange}>
                    {options}
                </Input>
            </div>
            <div style={{marginBottom:'30px'}}>
                <h4>Rules</h4>
                <ul>
                    {gameModes[props.gameMode].isOverlineAllowed === true && <li>You must connect {gameModes[props.gameMode].winningPieceCount} or more in a row to win.</li>}
                    {gameModes[props.gameMode].isOverlineAllowed === false && <li>You must connect exactly {gameModes[props.gameMode].winningPieceCount} in a row to win.</li>}
                    <li>The winning line of pieces can be vertical, horizontal, or diagonal.</li>
                    <li>Black starts first.</li>
                    <li>You play on a {gameModes[props.gameMode].boardSize}x{gameModes[props.gameMode].boardSize} board.</li>
                </ul>
            </div>
        </div>
    );
}
