// src/App.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Apply styles conditionally based on the theme
  const themeStyles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  };

  return (
    <div style={{ ...themeStyles[theme], padding: '20px', textAlign: 'center' }}>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme} style={{ padding: '10px', cursor: 'pointer' }}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => (
  <div>
    <ThemeToggler />
  </div>
);

export default App;
