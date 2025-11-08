import React, { useState } from 'react';

const MentalHealthChatbot = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <div
        className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg shadow-lg p-6 mb-8"
        style={{
          backgroundImage: 'linear-gradient(90deg,#20c997,#06b6d4)',
          boxShadow: '0 18px 36px rgba(6,182,212,0.25)'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              🤖 AI Mental Health Support
            </h3>
            <p className="text-teal-100">
              24/7 AI companion with live sources from trusted mental health organizations
            </p>
          </div>
          <div className="text-4xl">💙</div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="btn px-6 py-2 font-medium bg-white text-teal-600 hover:bg-gray-100"
            style={{ boxShadow: '0 12px 24px rgba(6,182,212,0.25)' }}
          >
            {isActive ? 'End Chat' : 'Start Chat'}
          </button>
          <div className="text-sm text-teal-100">
            ✓ Evidence-based responses ✓ Live sources ✓ Crisis resources
          </div>
        </div>
      </div>

      {/* Chatbot Interface */}
      {isActive && (
        <div className="bg-white rounded-lg shadow-lg mb-8" style={{ boxShadow: '0 18px 36px rgba(31,41,55,0.12)' }}>
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold">AI Mental Health Assistant</h4>
                  <p className="text-sm text-teal-100">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsActive(false)}
                className="text-white hover:text-gray-200 text-xl"
              >
                ×
              </button>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ boxShadow: '0 8px 16px rgba(13,148,136,0.25)' }}>
                AI
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-gray-800">
                    Hello! I'm your AI mental health companion. I'm here to provide support, evidence-based techniques, and connect you with trusted resources. How are you feeling today?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <button className="btn btn-primary" style={{ background: '#0d9488', boxShadow: '0 12px 24px rgba(13,148,136,0.25)' }}>
                Send
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              🔒 This is a supportive AI tool. For emergencies, call 988 (Suicide & Crisis Lifeline)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalHealthChatbot;