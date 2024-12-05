import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const { guidedJourney, customRoutines } = useContext(AppContext);

  const dailyTasks = [
    ...guidedJourney.filter((task) => task.frequency === 'Daily'),
    ...customRoutines.filter((task) => task.frequency === 'Daily'),
  ];

  return (
    <div>
      <h1>Daily Dashboard</h1>
      <ul>
        {dailyTasks.map((task, index) => (
          <li key={index}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
