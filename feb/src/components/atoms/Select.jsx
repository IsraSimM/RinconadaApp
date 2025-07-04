import React from 'react';

const Select = ({ name, value, onChange, options, placeholder, className = '' }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 transition-all duration-300 ${className}`}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;