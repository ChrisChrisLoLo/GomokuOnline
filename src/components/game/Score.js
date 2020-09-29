import React from "react";

export default function Score(props) {
    return (
        <div>
            <h5>Black: {props.blackScore}</h5>
            <h5>White: {props.whiteScore}</h5>
        </div>
    );
}