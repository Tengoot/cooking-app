import React from 'react';
import RecipeIngredient from './recipeIngredient'

const RecipeIngredientList = (props) => {
  const components = props.recipeIngredients.map((recipeIngredient) => (
    <RecipeIngredient
      key={`recipe-ingredient-${recipeIngredient.id}`}
      id={recipeIngredient.id}
      ingredientId={recipeIngredient.ingredientId}
      amount={recipeIngredient.amount}
      unit={recipeIngredient.unit}
    />
  ));
  return (
    <ul className="RecipeIngredient-list">
      {components}
    </ul>
  );
}

export default RecipeIngredientList;