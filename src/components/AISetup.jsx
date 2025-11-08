import React, { useState } from 'react';

const AISetup = ({ onProfileCreated }) => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
    fitnessLevel: '',
    goal: '',
    diet: '',
    workoutDays: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const profile = {
      age: parseInt(formData.age),
      weight: parseInt(formData.weight),
      height: parseInt(formData.height),
      gender: formData.gender,
      fitnessLevel: formData.fitnessLevel,
      goal: formData.goal,
      diet: formData.diet,
      workoutDays: parseInt(formData.workoutDays)
    };

    localStorage.setItem('fitnessProfile', JSON.stringify(profile));
    onProfileCreated(profile);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(240,249,255,0.7))',
        borderRadius: '1rem',
        padding: '1rem'
      }}
    >
      {/* AI Setup Section */}
      <div className="mb-8">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg p-6"
          style={{
            backgroundImage: 'linear-gradient(90deg,#764ba2,#667eea,#20c997)',
            boxShadow: '0 18px 36px rgba(118,75,162,0.25)'
          }}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            🤖 AI Personal Trainer & Nutritionist
          </h3>
          <p className="mb-4">Get personalized workout and meal plans tailored just for you!</p>
        </div>
      </div>

      {/* AI Setup Form */}
      <div className="mb-8">
        <div
          className="bg-white rounded-lg shadow-md p-6"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 18px 36px rgba(102,126,234,0.15)'
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tell us about yourself</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">🎂 Age</label>
                <input
                  type="number"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(118,75,162,0.12)' }}
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">⚖️ Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  required
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(32,201,151,0.12)' }}
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">📏 Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  required
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(255,109,179,0.12)' }}
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">🚻 Gender</label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(102,126,234,0.12)' }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">🏋️ Fitness Level</label>
                <select
                  name="fitnessLevel"
                  required
                  value={formData.fitnessLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(118,75,162,0.12)' }}
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">🎯 Primary Goal</label>
                <select
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  style={{ boxShadow: '0 8px 18px rgba(32,201,151,0.12)' }}
                >
                  <option value="">Select Goal</option>
                  <option value="weight_loss">Weight Loss</option>
                  <option value="muscle_gain">Muscle Gain</option>
                  <option value="endurance">Improve Endurance</option>
                  <option value="general_fitness">General Fitness</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">🥗 Dietary Preferences</label>
              <select
                name="diet"
                required
                value={formData.diet}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                style={{ boxShadow: '0 8px 18px rgba(255,109,179,0.12)' }}
              >
                <option value="">Select Diet Type</option>
                <option value="omnivore">Omnivore</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
                <option value="mediterranean">Mediterranean</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">📅 Available Workout Days per Week</label>
              <select
                name="workoutDays"
                required
                value={formData.workoutDays}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                style={{ boxShadow: '0 8px 18px rgba(102,126,234,0.12)' }}
              >
                <option value="">Select Days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
                <option value="7">7 days</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
              style={{
                backgroundImage: 'linear-gradient(90deg,#667eea,#764ba2,#ff6db3)',
                boxShadow: '0 16px 32px rgba(118,75,162,0.3)'
              }}
            >
              Generate My AI Plan 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AISetup;