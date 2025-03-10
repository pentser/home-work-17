import React from 'react'
import { useState } from 'react';
const Star = ({ selected = false, onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    {selected ? '★' : '☆'}
  </span>
);

function Rate() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          selected={star <= rating}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
}

export default Rate