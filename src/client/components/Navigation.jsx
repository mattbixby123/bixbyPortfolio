import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentPath }) => {
  // Helper function to determine if a link is active
  const isLinkActive = (path) => currentPath === path;

  return (
    <>
      <div className="section-heading">
        <span className="diamond">♦</span> NAVIGATION <span className="diamond">♦</span>
      </div>

      <div className="nav-grid">
        {/* Home Link */}
        {isLinkActive("/") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">🏡</span>
            <span className="nav-label">Home</span>
          </div>
        ) : (
          <Link to="/" className="nav-card">
            <span className="nav-icon">🏡</span>
            <span className="nav-label">Home</span>
          </Link>
        )}

        {/* Portfolio Link */}
        {isLinkActive("/portfolio") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">💼</span>
            <span className="nav-label">Portfolio</span>
          </div>
        ) : (
          <Link to="/portfolio" className="nav-card">
            <span className="nav-icon">💼</span>
            <span className="nav-label">Portfolio</span>
          </Link>
        )}

        {/* Freelance Link */}
        {isLinkActive("/freelance") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">💰</span>
            <span className="nav-label">Freelance</span>
          </div>
        ) : (
          <Link to="/freelance" className="nav-card">
            <span className="nav-icon">💰</span>
            <span className="nav-label">Freelance</span>
          </Link>
        )}

        {/* Contact Link */}
        {isLinkActive("/contact") ? (
          <div className="nav-card nav-card-disabled">
            <span className="nav-icon">✉️</span>
            <span className="nav-label">Contact</span>
          </div>
        ) : (
          <Link to="/contact" className="nav-card">
            <span className="nav-icon">✉️</span>
            <span className="nav-label">Contact</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navigation;