// In App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// New retro-themed components
import RetroHome from './components/RetroHome';
import RetroPortfolio from './components/RetroPortfolio';
import RetroContact from './components/RetroContact';

// Import RetroStyle.css
import './RetroStyle.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RetroHome />} />
      <Route path="/portfolio" element={<RetroPortfolio />} />
      <Route path="/contact" element={<RetroContact />} />
    </Routes>
  );
}

export default App;