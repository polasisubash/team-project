import React, { useState } from 'react';
import PsychologyArticles from './PsychologyArticles';
import MentalHealthChatbot from './MentalHealthChatbot';
import MoodTracker from './MoodTracker';

const MentalHealthTab = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  return (
    <div>
      {/* AI Psychology Articles Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            🧠 AI Psychology Assistant
          </h3>
          <p className="mb-4">
            Get personalized articles from renowned psychologists based on your current concerns
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { id: 'anxiety', label: 'Anxiety' },
              { id: 'depression', label: 'Depression' },
              { id: 'stress', label: 'Stress' },
              { id: 'relationships', label: 'Relationships' },
              { id: 'self_esteem', label: 'Self-Esteem' },
              { id: 'academic', label: 'Academic Pressure' },
              { id: 'sleep', label: 'Sleep Issues' },
              { id: 'all', label: 'View All' }
            ].map(category => (
              <button
                key={category.id}
                onClick={() => setCurrentFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  currentFilter === category.id
                    ? 'bg-white text-indigo-600 font-medium'
                    : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Display */}
      <PsychologyArticles currentFilter={currentFilter} />

      {/* AI Mental Health Chatbot */}
      <MentalHealthChatbot />

      {/* Additional Mental Health Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Counseling Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            🗣️ Counseling Services
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Individual Counseling</h4>
              <p className="text-gray-600">One-on-one sessions with licensed counselors</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold">Group Therapy</h4>
              <p className="text-gray-600">Support groups for various topics</p>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
              Schedule Appointment
            </button>
          </div>
        </div>

        {/* Mindfulness Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            🧘‍♀️ Mindfulness & Meditation
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold">Daily Meditation</h4>
              <p className="text-gray-600">Guided sessions every morning at 8 AM</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Stress Management</h4>
              <p className="text-gray-600">Workshops on coping strategies</p>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors">
              Start Meditation
            </button>
          </div>
        </div>
      </div>

      {/* Mood Tracker */}
      <MoodTracker />
    </div>
  );
};

export default MentalHealthTab;