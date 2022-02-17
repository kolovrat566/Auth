import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import {isValidEmail, isValidPassword} from '../../helper';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenErrorModal, setIsOpenErrorModal] = useState('');

    const store = useSelector(state => state.store);

    const handleInput = (e, setState) => {
        setState(e.target.value);
    };

    const handleValidLogin = (e) => {
        if (!isValidEmail(e.target.value)) setErrorLogin('Не допустимый логин');
        else setErrorLogin('');
    };

    const handleValidPassword = (e) => {
        if (!isValidPassword(e.target.value)) setErrorPassword('Не допустимый пароль');
        else setErrorPassword('');
    };

    const handleLogin = () => {
        if (login === store.login && password ===store.password) {
            setIsOpenModal(true)
            setIsOpenErrorModal(false)
        }
        else {
            setIsOpenModal(false)
            setIsOpenErrorModal(true)
        }
    };

    return (
        <div>
            Вход
            <input value={login} onInput={(e) => handleInput(e, setLogin)} onBlur={(e) => handleValidLogin(e)}/>
            {!!errorLogin && <div>{errorLogin}</div>}
            <input value={password} onInput={(e) => handleInput(e, setPassword)} onBlur={(e) => handleValidPassword(e)}/>
            {!!errorPassword && <div>{errorPassword}</div>}
            <button onClick={handleLogin}>войти</button>
            {isOpenModal && 
            <div>вы успешно вошли</div>}
             {isOpenErrorModal && 
            <div>не верный логин или пароль</div>}
        </div>
    )
}

export default Login