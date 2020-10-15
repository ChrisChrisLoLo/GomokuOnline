import React, {useState} from "react";
import boardCellStyle from './BoardCell.module.css';

export default function BoardCell(props) {

    let cellColor;
    let className = [];
    // let [isEmpty, setIsEmpty] = useState(props.color === ' ');
    let [isHovered, setIsHovered] = useState(false);
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

    if (isHovered && props.color === ' '){
        cellStyle.backgroundColor = props.playingColor === 'B' ? 'black' : 'white';
        cellStyle.opacity = 0.7;
    }

    return (
        <div className={className}
             style={cellStyle}
             onClick={() => { props.playMove(props.i, props.j) }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
        </div>
    );
}