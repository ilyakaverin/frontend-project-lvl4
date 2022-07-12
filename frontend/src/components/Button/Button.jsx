import React from 'react';
import style from './style.module.scss';

const Button = ({name, ...rest}) => {
    return (
        <button {...rest}>{name}</button>
    )
}
export default Button
