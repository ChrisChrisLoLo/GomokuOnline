import React from "react";
import messageStyle from './Message.module.css';

export default function Message(props) {
    return (
        <div className={messageStyle.messageBox}>
            <h4 className={messageStyle.message}>
                {props.message}
            </h4>
        </div>
    );
}