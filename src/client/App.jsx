// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// retro-themed components
import RetroHome from './pages/RetroHome';
import RetroPortfolio from './pages/RetroPortfolio';
import RetroContact from './pages/RetroContact'
import RetroFreelance from './pages/RetroFreelance';

// Import RetroStyle.css
import './RetroStyle.css';

function App() {
  const location = useLocation(); // Get the current location object

  return (
    <>
      {/* Pass the pathname from the location object to each route element */}
      <Routes>
        <Route path="/" element={<RetroHome currentPath={location.pathname} />} />
        <Route path="/portfolio" element={<RetroPortfolio currentPath={location.pathname} />} />
        <Route path="/contact" element={<RetroContact currentPath={location.pathname} />} />
        <Route path="/freelance" element={<RetroFreelance currentPath={location.pathname} />} />
      </Routes>
    </>
  );
}

export default App;