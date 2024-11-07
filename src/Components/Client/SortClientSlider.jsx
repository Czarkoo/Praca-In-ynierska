import React from 'react';

const SortClientSlider = ({ onSortChange }) => {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sortuj: </label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="featured">Wyróżnione</option>
        <option value="newest">Najnowsze</option>
        <option value="oldest">Najstarsze</option>
        <option value="highest_rate">Ocena: od najwyższej</option>
        <option value="lowest_rate">Ocena: od najniższej</option>
      </select>
    </div>
  );
};

export default SortClientSlider;