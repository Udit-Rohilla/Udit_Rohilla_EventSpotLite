import React from 'react';
import '../ToggleButton.css';

const ToggleButton = ({ theme, onToggleTheme }) => {
  return (
    <button onClick={onToggleTheme} className={`toggle-button ${theme}`}>
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
};

export default ToggleButton;
