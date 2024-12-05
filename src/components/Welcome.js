import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure the CSS is imported

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Follow</h1>
      <p className="subtitle">Become a saint</p>
      <div className="divider"></div>
      <button className="button" onClick={() => navigate('/questionnaire')}>
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
