import React, { useRef, useEffect } from 'react';
import style from './style.module.scss';


const MessageBoard = ({ messages }) => {


    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollTo(0, 999999);
    },[messages])

    return (
        <div ref={scrollRef} className={style.messages}>
        {
            messages &&  messages.map((message) => <span key={message.id}>{message.text}</span>)
        }
        </div>
    )
}
export default MessageBoard;