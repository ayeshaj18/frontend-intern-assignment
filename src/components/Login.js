import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/auth/${isRegister ? 'register' : 'login'}`, form);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      <button type="button" onClick={() => setIsRegister(!isRegister)}>Switch to {isRegister ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default Login;