import React from "react";
import boardCellStyle from './BoardCell.module.css';

export default function BoardCell(props) {

    let cellColor;
    let className = [];
    switch (props.color) {
        case 'W':
            cellColor = 'white';
            break;
        case 'B':
            cellColor = 'black';
            break;
        case ' ':
            cellColor = 'goldenrod';
            className = [boardCellStyle.cross];
            break;
        default:
            console.error('invalid board color')
    }

    let cellStyle = {
        backgroundColor: cellColor,
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        '&:hover': {
            width: '1000px',
            cursor: 'pointer',
        },
    };

    return (
        <div className={className} style={cellStyle} onClick={() => { props.playMove(props.i, props.j) }}>
        </div>
    );
}