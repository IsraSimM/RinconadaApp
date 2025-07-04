import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

const FormField = ({ label, type = 'text', name, value, onChange, options, placeholder, error, className = '' }) => {
  const context = useContext(ThemeContext);
  const { themes, theme } = context || {
    themes: {
      'dark-neon': {
        bg: 'dark-neon-bg',
        gradient: 'dark-neon-gradient',
        accent: 'dark-neon-accent',
        secondary: 'dark-neon-secondary',
        text: 'dark-neon-text',
      },
    },
    theme: 'dark-neon',
  };

  return (
    <div className="mb-4">
      <label className={`block text-${themes[theme]?.text || 'gray-600'} font-medium mb-1`}>{label}</label>
      {type === 'select' ? (
        <Select
          name={name}
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 transition-all duration-300 ${
            error ? `border-${themes[theme]?.secondary || 'red-500'}` : ''
          } ${className}`}
        />
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 transition-all duration-300 ${
            error ? `border-${themes[theme]?.secondary || 'red-500'}` : ''
          } ${className}`}
        />
      )}
      {error && <p className={`text-${themes[theme]?.secondary || 'red-500'} text-sm mt-1`}>{error}</p>}
    </div>
  );
};

export default FormField;