import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MDBIcon } from 'mdb-react-ui-kit';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        color: isDarkMode ? '#fff' : '#000',
        transition: 'color 0.3s ease'
      }}
      aria-label="Toggle theme"
    >
      <MDBIcon fas icon={isDarkMode ? 'sun' : 'moon'} size="lg" />
    </button>
  );
};

export default ThemeToggle; 