import React from "react";
import scoreStyle from './Score.module.css';
import black from '../../assets/icon/black.svg';
import white from '../../assets/icon/white.svg';

export default function Score(props) {
    return (
        <div>
            <h5 className={scoreStyle.score}>Score</h5>

            <div className={scoreStyle.scoreBox}>
                <img src={black} className={scoreStyle.stone} />
                <span className={scoreStyle.numberScore}>{props.blackScore}</span>
            </div>

            <div className={scoreStyle.scoreBox}>
                <img src={white} className={scoreStyle.stone} />
                <span className={scoreStyle.numberScore}>{props.whiteScore}</span>
            </div>
            
        </div>
    );
}