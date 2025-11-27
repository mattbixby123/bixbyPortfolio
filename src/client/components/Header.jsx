import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="retro-header">
        <div className="retro-title">~ % cd matthew@bixby</div>
      </div>
    </Link>
  );
};

export default Header;