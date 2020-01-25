import React from 'react';
import Link from '../routing/Link'

export default function RecipeIngredientListItem(props) {
  const ri = props.recipeIngredient;
  return(
    <li className="RecipeIngredient-item">
        <Link to={`/ingredients/${ri.ingredient.id}`}>
          {`${ri.amount || ''}${ri.unit || ''} ${ri.ingredient.name}`.trim()}
        </Link>
      </li>
  );
}