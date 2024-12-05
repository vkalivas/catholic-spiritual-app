import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

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
    <div className="container">
      <h1 className="title">Tell us about yourself</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '20px 0' }}>
          <label>Prayer Frequency:</label>
          <input
            type="text"
            name="prayerFrequency"
            value={responses.prayerFrequency}
            onChange={handleInputChange}
            style={{ padding: '10px', margin: '10px 0', borderRadius: '5px' }}
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <label>Challenges:</label>
          <input
            type="text"
            name="challenges"
            value={responses.challenges}
            onChange={handleInputChange}
            style={{ padding: '10px', margin: '10px 0', borderRadius: '5px' }}
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <label>Goals:</label>
          <input
            type="text"
            name="goals"
            value={responses.goals}
            onChange={handleInputChange}
            style={{ padding: '10px', margin: '10px 0', borderRadius: '5px' }}
          />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
