import React from 'react';

const Input = ({ type = 'text', name, value, onChange, placeholder, className = '' }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 transition-all duration-300 ${className}`}
    />
  );
};

export default Input;