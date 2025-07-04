import React from 'react';

const Heading = ({ level = 1, children, className = '' }) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`animate-slide-up ${level === 1 ? 'text-4xl font-bold' : 'text-2xl font-semibold'} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;