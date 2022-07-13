import React, { useContext, useEffect } from 'react';
import style from './style.module.scss';
import { AuthContext } from '../../context/authContext';
import { getChatData, chatStore, updateModalState } from '../../store/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import ChannelBoard from '../../components/ChannelBoard/ChannelBoard';
import MessageBoard from '../../components/MessageBoard/MessageBoard';
import InputBoard from '../../components/InputBoard/InputBoard';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Chat = () => {

    const { dispatch } = useContext(AuthContext);
    const reduxDispatch = useDispatch();
    const { data } = useSelector(chatStore);
    const handleClick = () => { dispatch({type: 'logout'}) };
    const handleOpenModal = () => { reduxDispatch(updateModalState(true))};
    const { store } = useContext(AuthContext);
    const { username } = store.authentication;


    useEffect(() => {
        reduxDispatch(getChatData());
    },[])
    

    return (
        <div className={style.chat__wrapper}>
            <Button name="logout" onClick={handleClick} />
            <Button name="new channel" onClick={handleOpenModal} />
            <Modal />
        <div className={style.chat__container}>
            <ChannelBoard channels={data.channels} currentChannel={data.currentChannelId}  />
            <MessageBoard nickname={username} messages={data.messages} currentChannel={data.currentChannelId}   />
            <InputBoard store={data}  />
        </div>

        </div>
    )
}
export default Chat;