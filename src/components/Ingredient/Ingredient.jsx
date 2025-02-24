// src/components/Ingredient/Ingredient.jsx

import React from 'react';

const Ingredient = ({ ingredient, onAdd, onRemove, isRemovable }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {isRemovable ? (
        <button onClick={() => onRemove(ingredient)}>X</button>
      ) : (
        <button onClick={() => onAdd(ingredient)}>+</button>
      )}
    </li>
  );
};

export default Ingredient;