import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { chatStore } from '../../store/chatSlice';


const ChannelBoard = () => {
    const store = useSelector(chatStore);

    return (
        <section className={style.channels}>
            <h3>Channels</h3>
            <ul>
                {
                    store.data.channels.map((channel) => <li>{channel.name}</li>)
                }
            </ul>
        </section>
    )
}
export default ChannelBoard;