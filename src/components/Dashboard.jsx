import React, { useState } from 'react';
import PhysicalHealthTab from './PhysicalHealthTab';
import MentalHealthTab from './MentalHealthTab';
import ResourcesTab from './ResourcesTab';

const Dashboard = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('physical');

  const tabs = [
    { id: 'physical', label: 'Physical Health', icon: '💪' },
    { id: 'mental', label: 'Mental Health', icon: '🧠' },
    { id: 'resources', label: 'Resources', icon: '🏥' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'physical':
        return <PhysicalHealthTab />;
      case 'mental':
        return <MentalHealthTab />;
      case 'resources':
        return <ResourcesTab />;
      default:
        return <PhysicalHealthTab />;
    }
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div
        className="wellness-gradient text-white py-16"
        style={{
          backgroundImage: 'linear-gradient(120deg,#667eea 0%,#764ba2 40%,#ff6db3 100%)',
          boxShadow: 'inset 0 -10px 40px rgba(0,0,0,0.15)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Wellness Journey</h1>
          <p className="text-xl opacity-90">Your complete guide to physical and mental health on campus</p>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Main Content */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.0), rgba(255,255,255,0.65))',
          borderRadius: '1rem'
        }}
      >
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
            style={{ boxShadow: '0 18px 36px rgba(102,126,234,0.18)' }}
          >
            <div className="text-3xl mb-2">💪</div>
            <h3 className="text-lg font-semibold text-gray-900">Physical Health</h3>
            <p className="text-gray-600">Fitness & Nutrition</p>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
            style={{ boxShadow: '0 18px 36px rgba(118,75,162,0.18)' }}
          >
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="text-lg font-semibold text-gray-900">Mental Health</h3>
            <p className="text-gray-600">Mindfulness & Support</p>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
            style={{ boxShadow: '0 18px 36px rgba(255,109,179,0.18)' }}
          >
            <div className="text-3xl mb-2">🏥</div>
            <h3 className="text-lg font-semibold text-gray-900">Health Services</h3>
            <p className="text-gray-600">Campus Resources</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-white rounded-lg shadow-md p-1 flex"
            style={{ boxShadow: '0 16px 32px rgba(0,0,0,0.08)' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;