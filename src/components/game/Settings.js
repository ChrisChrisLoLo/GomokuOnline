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
            <h4>Options</h4>
            <Button onClick={() => props.resetGame(props.board.length)}>Reset</Button>

            <h4>Game configuration</h4>
            <Input type='select' name='gameMode' onChange={handleChange}>
                {options}
            </Input>
        </div>
    );
}