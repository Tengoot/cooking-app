import React from 'react';
import RecipeIngredientListItem from './RecipeIngredientListItem'

export default function RecipeIngredients(props) {
  const listItems = props.recipeIngredients.map((recipeIngredient) => (
    <RecipeIngredientListItem
      recipeIngredient={recipeIngredient}
    />
  ));
  return (
    <ul className="RecipeIngredient-list">
      {listItems}
    </ul>
  );
}