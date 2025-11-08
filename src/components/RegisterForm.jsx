import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = ({ onShowLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('wellnessUsers') || '[]');
    
    // Check if user already exists
    if (users.find(user => user.email === formData.email)) {
      alert('An account with this email already exists!');
      return;
    }
    
    // Create new user
    const newUser = {
      ...formData,
      id: Date.now()
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem('wellnessUsers', JSON.stringify(users));
    
    alert('Registration successful! Please log in.');
    navigate('/login', { replace: true });
  };

  return (
    <div
      className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        background: 'linear-gradient(135deg, #f0fff4 0%, #f0f9ff 50%, #fff5f5 100%)'
      }}
    >
      <div
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
        style={{
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 20px 40px rgba(32,201,151,0.15)'
        }}
      >
        <div>
          <h2
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
            style={{
              backgroundImage: 'linear-gradient(90deg,#20c997,#ffd166,#ff6db3)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join the wellness community
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-center">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                style={{ boxShadow: '0 8px 18px rgba(32,201,151,0.12)' }}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                style={{ boxShadow: '0 8px 18px rgba(102,126,234,0.12)' }}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                Student ID
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                value={formData.studentId}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                style={{ boxShadow: '0 8px 18px rgba(255,109,179,0.12)' }}
                placeholder="Enter your student ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                style={{ boxShadow: '0 8px 18px rgba(118,75,162,0.12)' }}
                placeholder="Create a password"
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              type="submit"
              className="btn btn-primary w-full wellness-gradient"
              style={{ boxShadow: '0 12px 24px rgba(32,201,151,0.35)' }}
            >
              Create Account
            </button>
          </div>
          
          <div className="text-center">
            <Link to="/login" className="btn btn-ghost text-purple-700 text-sm" style={{ textDecoration: 'underline' }}>
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;