import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Paragraph = ({ children, className = '' }) => {
  const { themes, theme } = useContext(ThemeContext);
  return (
    <p className={`text-${themes[theme].text} text-lg animate-fade-in ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;