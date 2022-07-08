import React, { useContext, useEffect } from 'react';
import style from './style.module.scss';
import { AuthContext } from '../../context/authContext';
import { getChatData, chatStore } from '../../store/chatSlice';
import { useSelector, useDispatch } from 'react-redux';
import ChannelBoard from '../../components/ChannelBoard/ChannelBoard';
import MessageBoard from '../../components/MessageBoard/MessageBoard';
import InputBoard from '../../components/InputBoard/InputBoard';


const Chat = () => {

    const { dispatch } = useContext(AuthContext);
    const reduxDispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'logout'})
    }
    
    
    useEffect(() => {
        reduxDispatch(getChatData())
    },[])

    return (
        <>
        <section className={style.chat__container}>
        <ChannelBoard  />
        <MessageBoard  />
        <InputBoard />
        </section>
        <button className={style.chat} onClick={handleClick}>Logout</button>
        </>
    )
}
export default Chat;