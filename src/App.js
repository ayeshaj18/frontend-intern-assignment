import React, { useState } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if (!token) {
    return <Login setToken={setToken} />;
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return <Dashboard setToken={setToken} />;
}

export default App;
