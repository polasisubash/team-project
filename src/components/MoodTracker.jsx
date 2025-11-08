import React, { useState } from 'react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodMessage, setMoodMessage] = useState('');

  const moods = [
    { emoji: '😢', label: 'Sad' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '😄', label: 'Great' }
  ];

  const setMood = (mood) => {
    setSelectedMood(mood);
    
    const messages = {
      '😢': "We understand you're having a tough day. Consider reaching out to our counseling services.",
      '😐': "It's okay to have neutral days. Maybe try a short meditation session?",
      '🙂': "Good to see you're doing well! Keep up the positive momentum.",
      '😊': "Great mood! Consider sharing your positivity with others today.",
      '😄': "Fantastic! Your positive energy is contagious. Have an amazing day!"
    };

    setMoodMessage(messages[mood]);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 lg:col-span-2"
      style={{ boxShadow: '0 18px 36px rgba(102,126,234,0.18)' }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">😊 Daily Mood Tracker</h3>
      <p className="text-gray-600 mb-4">How are you feeling today?</p>
      
      <div className="flex justify-center space-x-4 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.emoji}
            onClick={() => setMood(mood.emoji)}
            className={`text-4xl p-2 rounded-lg transition-colors ${
              selectedMood === mood.emoji
                ? 'bg-blue-100 ring-2 ring-blue-500'
                : 'hover:bg-gray-100'
            }`}
            style={{ boxShadow: selectedMood === mood.emoji ? '0 10px 20px rgba(59,130,246,0.25)' : 'none' }}
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      
      {moodMessage && (
        <div
          className="text-center text-gray-600 bg-gray-50 rounded-lg p-4"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(107,114,128,0.15)' }}
        >
          {moodMessage}
        </div>
      )}
    </div>
  );
};

export default MoodTracker;