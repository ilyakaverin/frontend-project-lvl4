import React, { useContext, useEffect } from 'react';
import style from './style.module.scss';
import { AuthContext } from '../../context/authContext';
import { getChatData, updateMessagesState, chatStore } from '../../store/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import ChannelBoard from '../../components/ChannelBoard/ChannelBoard';
import MessageBoard from '../../components/MessageBoard/MessageBoard';
import InputBoard from '../../components/InputBoard/InputBoard';
import socket from "../../socket";

const Chat = () => {

     const { dispatch } = useContext(AuthContext);
    const reduxDispatch = useDispatch();
    const { data } = useSelector(chatStore);

    const handleClick = () => {
       dispatch({type: 'logout'})
    }
    const updateMessages = (message) => {
        console.log(message)
        reduxDispatch(updateMessagesState(message))
    }
    useEffect(() => {
        reduxDispatch(getChatData());
        socket.on('newMessage', updateMessages);
    },[])
    

    return (
        <>
        <button className={style.chat} onClick={handleClick}>Logout</button>
        <section className={style.chat__container}>
        <ChannelBoard channels={data.channels}  />
        <MessageBoard messages={data.messages}  />
        <InputBoard />
        </section>

        </>
    )
}
export default Chat;