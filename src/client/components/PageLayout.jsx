import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const PageLayout = ({ currentPath, bannerText, children }) => {
  return (
    <div className="retro-container">
      {/* Header - always at top */}
      <Header />

      {/* Navigation - always comes after header, before banner */}
      <Navigation currentPath={currentPath} />

      {/* Featured banner - comes after navigation */}
      {bannerText && (
        <div className="featured-banner">
          {bannerText}
        </div>
      )}

      {/* Page content */}
      {children}

      {/* Footer - always at bottom */}
      <Footer />
    </div>
  );
};

export default PageLayout;