import React from 'react';
import style from './style.module.scss';


const InputBoard =() => {
    return (
        <div className={style.chat__input}>
        <input type="text" placeholder="Type here..."  />
        <button>Send</button>
        </div>
    )
}
export default InputBoard