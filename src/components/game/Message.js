import React from "react";
import messageStyle from './Message.module.css';

export default function Message(props) {
    return (
        <div>
            <h4>
                {props.message}
            </h4>
        </div>
    );
}
