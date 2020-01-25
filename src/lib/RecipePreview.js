import React from 'react';
import Link from '../routing/Link';
import SuspenseImage from '../SuspenseImage';

export default function RecipePreview(props) {
  const recipe = props.recipe;
  return(
    <Link to={`/recipes/${recipe.id}`}>
      <div className='App-recipe-thumb'>
        <SuspenseImage src={'http://localhost:3000/' + recipe.imageUrl} className='RecipeThumb-image' />
        <div className='RecipeThumb-content'>
          <div className='RecipeThumb-title'>
            <span>{recipe.title}</span>
          </div>
          <div className='RecipeThumb-author'>
          <span>{recipe.user.nick}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}