import React from "react";
import "./BoardCell.css";

export default function BoardCell(props) {

    let cellColor;
    switch (props.color) {
        case 'W':
            cellColor = 'white';
            break;
        case 'B':
            cellColor = 'black';
            break;
        case ' ':
            cellColor = 'lightblue';
            break;
        default:
            console.error('invalid board color')
    }

    let cellStyle = {
        backgroundColor:cellColor,
        height:'100%',
        width:'100%',
        borderRadius:'50px',
        '&:hover': {
            width:'1000px',
            cursor: 'pointer',
        },
    };

    return (
        <div className={'boardCell'} style={cellStyle} onClick={()=>{props.playMove(props.i, props.j)}}>
        </div>
    );
}