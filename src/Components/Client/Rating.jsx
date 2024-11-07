import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="rating">
      {Array(fullStars).fill().map((_, index) => (
        <FaStar key={`full-${index}`} color="#ff9966" />
      ))}
      {halfStar === 1 && <FaStarHalfAlt color="#ff9966" />}
      {Array(emptyStars).fill().map((_, index) => (
        <FaRegStar key={`empty-${index}`} color="#ff9966" />
      ))}
      <span className="rating-value">{value.toFixed(1)}</span>
    </div>
  );
};

export default Rating;