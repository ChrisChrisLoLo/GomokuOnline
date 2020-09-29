import React, {useState} from "react";
import BoardCell from "./BoardCell";

// board, setBoard
export default function Board(props) {
    //TODO: make boardsize dynamic
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: `50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px`,
        gridTemplateRows: `50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px`,
        gridGap: 0,
        backgroundColor: 'maroon'
    };

    const grid = [];
    for (let i = 0; i < props.board.length ; i++){
        let row = [];
        for (let j = 0; j < props.board.length; j++) {
            const cell =
                <div style={{ gridRow:i+1, gridColumn:j+1 }} key={`${i}_${j}`}>
                    <BoardCell i={i} j={j} color={props.board[i][j]} playMove={props.playMove}/>
                </div>;
            row.push(cell);
        }
        grid.push(row);
    }

    return (
        <div style={boardStyle}>
            {grid}
        </div>
    );
}