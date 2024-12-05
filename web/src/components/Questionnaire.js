import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState({
    prayerFrequency: '',
    challenges: '',
    goals: '',
  });

  const handleInputChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding-results', { state: responses });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tell us about yourself</h2>
      <form onSubmit={handleSubmit}>
        <label>
          How often do you pray?
          <select name="prayerFrequency" onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="rarely">Rarely</option>
          </select>
        </label>
        <br />
        <label>
          Biggest challenge to growing spiritually:
          <input type="text" name="challenges" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          What are your spiritual goals?
          <input type="text" name="goals" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Questionnaire;
