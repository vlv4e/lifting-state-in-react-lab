// src/components/BurgerStack/BurgerStack.jsx

import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient 
              key={index} 
              ingredient={ingredient} 
              onRemove={removeFromBurger} 
              isRemovable={true} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;