import React from "react";
import { Button, Input } from "reactstrap";

import { gameModes } from "../../logic/gameModes";

export default function Settings(props) {
    let options = [];
    for (let gameModeName in gameModes){
        options.push(<option>{gameModeName}</option>)
    }
    return (
        <div>
            <h4>Options</h4>
            <Button onClick={props.resetGame}>Reset</Button>

            <h4>Game configuration</h4>
            <Input type='select' name='gameMode' >
                {options}
            </Input>
        </div>
    );
}