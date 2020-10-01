import React, {useState} from "react";
import BoardCell from "./BoardCell";

// board, setBoard
export default function Board(props) {

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${props.board.length}, 1fr)`,
        gridTemplateRows: `repeat(${props.board.length}, 1fr)`,
        gridGap: 0,
        backgroundColor: 'maroon',
        height: '800px',
        width: '800px'
    };

    const grid = [];
    for (let i = 0; i < props.board.length ; i++){
        let row = [];
        for (let j = 0; j < props.board.length; j++) {
            const cell =
                <div style={{ gridRow:i+1, gridColumn:j+1 , width:'50px', height:'50px'}} key={`${i}_${j}`}>
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