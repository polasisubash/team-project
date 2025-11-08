import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentWellnessUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setShowDashboard(true);
      setShowLogin(false);
      setShowRegister(false);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setShowDashboard(true);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentWellnessUser');
    setShowLogin(true);
    setShowDashboard(false);
    setShowRegister(false);
  };

  const handleShowLogin = () => {};
  const handleShowRegister = () => {};

  return (
    <BrowserRouter>
      <div className="min-h-full bg-gradient-to-br from-blue-50 to-purple-50">
        <Navigation 
          currentUser={currentUser}
          onLogout={handleLogout}
          onShowLogin={() => {}}
          onShowRegister={() => {}}
        />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <Routes>
            <Route path="/" element={<Navigate to={currentUser ? "/dashboard" : "/login"} replace />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} onShowRegister={() => {}} />} />
            <Route path="/register" element={<RegisterForm onShowLogin={() => {}} />} />
            <Route path="/dashboard" element={currentUser ? <Dashboard currentUser={currentUser} /> : <Navigate to="/login" replace />} />
            <Route path="*" element={<div>Not Found. <Link to="/login" className="btn btn-primary">Go Home</Link></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
