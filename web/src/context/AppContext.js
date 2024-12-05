import React, { createContext, useState } from 'react';
import { catholicPractices } from '../data/catholicPractices';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [guidedJourney, setGuidedJourney] = useState(catholicPractices.purgative);
  const [customRoutines, setCustomRoutines] = useState([]);

  const addCustomPractice = (practice) => {
    setCustomRoutines([...customRoutines, practice]);
  };

  return (
    <AppContext.Provider value={{ guidedJourney, customRoutines, addCustomPractice }}>
      {children}
    </AppContext.Provider>
  );
};
