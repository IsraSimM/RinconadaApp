import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  'dark-neon': {
    bg: 'dark-neon-bg',
    gradient: 'dark-neon-gradient',
    accent: 'dark-neon-accent',
    secondary: 'dark-neon-secondary',
    text: 'dark-neon-text',
  },
  'light-modern': {
    bg: 'light-modern-bg',
    gradient: 'light-modern-gradient',
    accent: 'light-modern-accent',
    secondary: 'light-modern-secondary',
    text: 'light-modern-text',
  },
  'remedios-classic': {
    bg: 'remedios-bg',
    gradient: 'remedios-gradient',
    accent: 'remedios-accent',
    secondary: 'remedios-secondary',
    text: 'remedios-text',
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-neon');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;