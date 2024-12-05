import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Catholic Spiritual App</h1>
      <p>Deepen your spiritual journey with a guided or custom path.</p>
      <button onClick={() => navigate('/questionnaire')}>Get Started</button>
    </div>
  );
};

export default Welcome;
