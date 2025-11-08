import React, { useState, useEffect } from 'react';
import AISetup from './AISetup';
import AIPlans from './AIPlans';
import FitnessTracker from './FitnessTracker';

const PhysicalHealthTab = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [showAISetup, setShowAISetup] = useState(false);
  const [showAIPlans, setShowAIPlans] = useState(false);

  useEffect(() => {
    // Check if user profile exists
    const savedProfile = localStorage.getItem('fitnessProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
      setShowAIPlans(true);
    } else {
      setShowAISetup(true);
    }
  }, []);

  const handleProfileCreated = (profile) => {
    setUserProfile(profile);
    setShowAISetup(false);
    setShowAIPlans(true);
  };

  return (
    <div>
      {showAISetup && !userProfile && (
        <AISetup onProfileCreated={handleProfileCreated} />
      )}
      
      {showAIPlans && userProfile && (
        <>
          <AIPlans userProfile={userProfile} />
          <div className="mt-8">
            <FitnessTracker />
          </div>
        </>
      )}
    </div>
  );
};

export default PhysicalHealthTab;