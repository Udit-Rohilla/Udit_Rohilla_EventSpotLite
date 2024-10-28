import React from 'react';
import '../NavBar.css';
import logo from '../logo.png'; 
import ToggleButton from './ToggleButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const NavBar = ({ onSearch, onToggleTheme, theme }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>EventSpot Lite</h1>
      </div>
      <input
        type="text"
        placeholder="Search events..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <div className="location">
        <LocationOnIcon className="location-icon" />
        <span>Tri-City</span>
      </div>
      <ToggleButton theme={theme} onToggleTheme={onToggleTheme} />
    </div>
  );
};

export default NavBar;
