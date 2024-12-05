import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Welcome from './components/Welcome';
import OnboardingResults from './components/OnboardingResults';
import GuidedJourney from './components/GuidedJourney';
import CustomRoutine from './components/CustomRoutine';
import Dashboard from './components/Dashboard';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/onboarding-results" element={<OnboardingResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guided-journey" element={<GuidedJourney />} />
          <Route path="/custom-routine" element={<CustomRoutine />} />
          <Route path="/questionnaire" element={<Questionnaire  />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;