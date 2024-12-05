import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CustomRoutine = () => {
  const { customRoutines, addCustomPractice } = useContext(AppContext);
  const [newPractice, setNewPractice] = useState({
    name: '',
    description: '',
    frequency: '',
  });

  const handleInputChange = (e) => {
    setNewPractice({ ...newPractice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomPractice(newPractice);
    setNewPractice({ name: '', description: '', frequency: '' });
  };

  return (
    <div>
      <h2>Custom Routine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Practice Name"
          value={newPractice.name}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newPractice.description}
          onChange={handleInputChange}
        />
        <select
          name="frequency"
          value={newPractice.frequency}
          onChange={handleInputChange}
        >
          <option value="">Select Frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>
        <button type="submit">Add Practice</button>
      </form>
      <ul>
        {customRoutines.map((practice, index) => (
          <li key={index}>
            <h4>{practice.name}</h4>
            <p>{practice.description}</p>
            <p><strong>Frequency:</strong> {practice.frequency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomRoutine;
