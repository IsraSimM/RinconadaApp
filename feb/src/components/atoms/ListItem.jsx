import React from 'react';

const ListItem = ({ children, className = '' }) => {
  return (
    <li className={`transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] pl-4 ${className}`}>
      {children}
    </li>
  );
};

export default ListItem;