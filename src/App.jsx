import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/RegisterFrom';
import Login from './components/LoginFom';
import ResetPassword from './components/ResetPassword';

function App() {
  const [register, setRegister] = useState({
    username: '',
    name: '',
    password: '',
  });

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });


  const handleRegister = async (e) => {
    e.preventDefault();

    const registerBody = {
      username: register.username,
      name: register.name,
      password: register.password,
    };

    try {
      const response = await axios.post("https://back-end-j67t.onrender.com/api/users", registerBody);

      console.log('register user... ', registerBody);
      setRegister({ username: '', name: '', password: '' });
      // const data = response.registerBody;
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: loginForm.username,
      password: loginForm.password
    };

    try {
      const response = await axios.post('https://back-end-j67t.onrender.com/api/login', { ...data });
      console.log( 'Login user ',data);
      setLoginForm({ username: '', password: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
     <Router>
      <Routes>
        <Route path="/rese_password" element={<ResetPassword />} />
        <Route path='/' element={<Login  setLoginForm={setLoginForm} handle={handleLogin} loginForm={loginForm}/>} />
        <Route path='/register' element={<Register setRegister={setRegister} register={register} handleRegister={handleRegister} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
