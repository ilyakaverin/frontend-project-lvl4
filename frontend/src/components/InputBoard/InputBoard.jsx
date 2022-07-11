import React, { useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import socket from '../../socket';


const InputBoard =() => {

    const [message, setMessage] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if(message.length === 0) inputRef.current.focus()
    },[message])



    const handleClick = (e) => {
        e.preventDefault()
        setDisabled(true);
        const promise1 = new Promise((resolve) => {
            setTimeout(resolve(socket.emit("newMessage", {text: message})), 500)
          });
          
          const promise2 = new Promise((resolve) => {
            setTimeout(resolve, 3000);
          });
          
          Promise.race([promise1, promise2]).then((value) => {
            console.log('err', value);
            if(value.connected) {
                setMessage('')
            }
            setDisabled(false);

          })
        
    }

    
    

    return (
        <form onSubmit={handleClick} className={style.chat__input}>
        <input ref={inputRef} className={style.chat__textinput} onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder="Type here..."  />
        <button disabled={isDisabled || message.length < 1} type="submit">Send</button>
        </form>
    )
}
export default InputBoard