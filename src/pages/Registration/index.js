import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {isValidEmail, isValidPassword} from '../../helper';
import {auth} from '../../Redux/nameStore/action'

const ChangePassword = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');


    const store = useSelector(state => state.store);
    console.log(store);


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

    const handleValidConfirmPassword = (e) => {
        if (e.target.value !== password) setErrorConfirmPassword('Пароли не совпадают');
        else setErrorConfirmPassword('');
    };
    
    const handleChangePassword = () => {
        if (!errorPassword && !errorLogin  && !errorConfirmPassword) dispatch(auth(login, password))
    };

    return (
        <div>
            Регистрация
            <input value={login} onInput={(e) => handleInput(e, setLogin)} onBlur={(e) => handleValidLogin(e)}/>
            {!!errorLogin && <div>{errorLogin}</div>}
            <input value={password} onInput={(e) => handleInput(e, setPassword)} onBlur={(e) => handleValidPassword(e)}/>
            {!!errorPassword && <div>{errorPassword}</div>}
            <input value={confirmPassword} onInput={(e) => handleInput(e, setConfirmPassword)} onBlur={(e) => handleValidConfirmPassword(e)}/>
            {!!errorConfirmPassword && <div>{errorConfirmPassword}</div>}
            <button onClick={handleChangePassword}>войти</button>
        </div>
    )
}

export default ChangePassword;