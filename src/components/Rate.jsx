
import React from 'react';

const Rate = ({ rate }) => {
  const validRate = typeof rate === 'number' && !isNaN(rate) ? rate : 0;
  const fullStars = Math.min(Math.max(validRate, 1), 5); // Ensure rate is between 1 and 5
  const emptyStars = 5 - fullStars;

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <span key={index}>★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>☆</span>
      ))}
    </div>
  );
};

export default Rate;