// src/context/ThemeContext.jsx

import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // ⚡ Persist and read the current theme ("light" or "dark")
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Whenever theme changes, swap the `html` class to switch CSS variables
  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
