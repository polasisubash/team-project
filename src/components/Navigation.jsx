import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, onLogout, onShowLogin, onShowRegister }) => {
  return (
    <nav
      className="wellness-gradient shadow-lg"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ff6db3 100%)',
        boxShadow: '0 12px 30px rgba(118, 75, 162, 0.35)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">🏥 Campus Wellness Hub</Link>
          </div>
          
          {!currentUser ? (
            <div className="flex space-x-4 items-center justify-center">
              <Link to="/login" className="btn btn-ghost text-white px-3 py-2 text-sm" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>Login</Link>
              <Link to="/register" className="btn btn-accent px-4 py-2 text-sm" style={{
                backgroundImage: 'linear-gradient(90deg,#ffd166,#20c997)',
                color: '#1f2937',
                boxShadow: '0 8px 18px rgba(255, 209, 102, 0.35)'
              }}>Register</Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {currentUser.name}!</span>
              <Link to="/login" onClick={onLogout} className="btn btn-danger px-4 py-2 text-sm" style={{
                boxShadow: '0 8px 16px rgba(239, 68, 68, 0.35)'
              }}>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;