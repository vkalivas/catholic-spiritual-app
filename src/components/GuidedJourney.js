import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GuidedJourney = () => {
  const { guidedJourney } = useContext(AppContext);

  return (
    <div>
      <h2>Guided Journey</h2>
      <ul>
        {guidedJourney.map((practice) => (
          <li key={practice.id}>
            <h4>{practice.name}</h4>
            <p>{practice.description}</p>
            <p><strong>Frequency:</strong> {practice.frequency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidedJourney;
