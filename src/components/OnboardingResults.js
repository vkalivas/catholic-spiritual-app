import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const OnboardingResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responses = location.state || {};

  return (
    <div className="container">
      <h1 className="title">Your Journey Begins</h1>
      <p className="subtitle">Here’s what we learned about you:</p>
      <ul>
        <li>Prayer Frequency: {responses.prayerFrequency}</li>
        <li>Challenges: {responses.challenges}</li>
        <li>Goals: {responses.goals}</li>
      </ul>
      <div className="divider"></div>
      <button className="button" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default OnboardingResults;
