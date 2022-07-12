import React from 'react';
import style from './style.module.scss';
import { useDispatch } from 'react-redux';
import { updateChannel } from '../../store/chatSlice';
import cn from 'classnames';

const Channel = ({name, id, active}) => {


    const reduxDispatch = useDispatch()

    const handleClick = (id) => {
        reduxDispatch(updateChannel(id))
    }

    return (
        <div className={style.channel__container}>
            <span className={cn(style.channel, {[style.active] : active == id })} onClick={() => handleClick(id)}>{name}</span>
            <div className={cn(style.channel__container_menu, {[style.hidden] :  id < 3})}>
                <span>delete</span>
                <span>edit</span>
            </div>
        </div>
    )
}
export default Channel;