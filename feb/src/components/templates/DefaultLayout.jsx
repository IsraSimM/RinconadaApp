import React from 'react';

const Image = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
    />
  );
};

export default Image;