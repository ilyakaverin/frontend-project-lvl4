import React from 'react';
import style from './style.module.scss';
import AuthForm from '../../components/AuthForm/AuthForm';


const Login = () => {

    return (
        <div className={style.authForm__container}>
            <AuthForm />
        </div>

    )
} 
export default Login