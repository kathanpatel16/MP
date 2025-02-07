// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UploadImage from './components/UploadImage';
import CheckerDashboard from './components/CheckerDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/checker-dashboard" element={<CheckerDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
