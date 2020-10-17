import React, { useState } from "react";
import BoardCell from "./BoardCell";

// board, setBoard
export default function Board(props) {

    var boardStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${props.board.length}, 1fr)`,
        gridTemplateRows: `repeat(${props.board.length}, 1fr)`,
        gridGap: 0,
        backgroundColor: 'goldenrod',
        height: '50vw',
        width: '50vw',
        float: 'left',
        pointerEvents: props.playable ? "auto" : "none",
    };

    const grid = [];
    for (let i = 0; i < props.board.length; i++) {
        let row = [];
        for (let j = 0; j < props.board.length; j++) {
            const cell =
                <div style={{ gridRow: i + 1, gridColumn: j + 1, width: '1fr', height: '1fr' }} key={`${i}_${j}`}>
                    <BoardCell i={i} j={j} color={props.board[i][j]} playMove={props.playMove} playingColor={props.playingColor}/>
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