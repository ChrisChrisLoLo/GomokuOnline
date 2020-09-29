import React from "react";

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
        height:'50px',
        width:'50px',
        borderRadius:'50px'
    };

    return (
        <div style={cellStyle} onClick={()=>{props.playMove(props.i, props.j)}}>
        </div>
    );
}