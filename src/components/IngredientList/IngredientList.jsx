// src/components/IngredientList/IngredientList.jsx

import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient 
            key={index} 
            ingredient={ingredient} 
            onAdd={addToBurger} 
            isRemovable={false} 
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;