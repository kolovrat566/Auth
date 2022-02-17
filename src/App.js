import './App.css';
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Login from './pages/Login/index'
import Registration from './pages/Registration/index'
import ChangePassword from './pages/ChangePassword/index'

function App() {
  const [page, setPage] = useState('registration');
  const {password, login} = useSelector(state => state.store);

  const veiwPage = () => {
    switch (page) {
      case 'registration': return <Registration/>
      case 'login': return <Login/>
      case 'change-password': {
        if (!!password && !!login) return <ChangePassword/>
        return <div>Необходима регистрация</div>
      }
      default:
    }
  }

  return (
    <div className="App">
      <button onClick={() => setPage('registration')}>Регистрация</button>
      <button onClick={() => setPage('login')}>Вход</button>
      <button onClick={() => setPage('change-password')}>Сменить пароль</button>
      {veiwPage()}

    </div>
  );
}

export default App;
