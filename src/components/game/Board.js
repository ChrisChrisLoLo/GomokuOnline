import React, { useState } from "react";
import BoardCell from "./BoardCell";
import boardCellStyle from './BoardCell.module.css';

// board, setBoard
export default function Board(props) {

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${props.board.length}, 1fr)`,
        gridTemplateRows: `repeat(${props.board.length}, 1fr)`,
        gridGap: 0,
        backgroundColor: 'goldenrod',
        height: '50vw',
        width: '50vw',
        float: 'left',
        pointerEvents: props.playable ? "auto" : "none",
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    const grid = [];
    for (let i = 0; i < props.board.length; i++) {
        let row = [];
        for (let j = 0; j < props.board.length; j++) {
            let emptyCellStyle = boardCellStyle.cross;
            if (props.gameMode !== 'Tic Tac Toe') {
                if (i === 0 && j === 0) {   //top left corner
                    emptyCellStyle = boardCellStyle.topLeftCorner;
                } else if (i === 0 && j === props.board.length - 1) {   //top right corner
                    emptyCellStyle = boardCellStyle.topRightCorner;
                } else if (i === props.board.length - 1 && j === 0) {   //bottom left corner
                    emptyCellStyle = boardCellStyle.bottomLeftCorner;
                } else if (i === props.board.length - 1 && j === props.board.length - 1) {   //bottom right corner
                    emptyCellStyle = boardCellStyle.bottomRightCorner;
                } else if (i === 0) {   //top row
                    emptyCellStyle = boardCellStyle.topRow;
                } else if (i === props.board.length - 1) {   //bottom row
                    emptyCellStyle = boardCellStyle.bottomRow;
                } else if (j === 0) {    //fist column
                    emptyCellStyle = boardCellStyle.firstColumn;
                } else if (j === props.board.length - 1) {    //last column
                    emptyCellStyle = boardCellStyle.lastColumn;
                }
            }
            const cell =
                <div style={{ gridRow: i + 1, gridColumn: j + 1, width: '1fr', height: '1fr' }} key={`${i}_${j}`}>
                    <BoardCell i={i} j={j}
                        color={props.board[i][j]}
                        playMove={props.playMove}
                        playingColor={props.playingColor}
                        emptyCellStyle={emptyCellStyle} />
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
