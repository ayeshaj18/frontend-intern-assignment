import React from 'react';
import TaskList from './TaskList';

const Dashboard = ({ setToken }) => {
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <TaskList />
    </div>
  );
};

export default Dashboard;
