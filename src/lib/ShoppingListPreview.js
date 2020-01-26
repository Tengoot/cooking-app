import React from 'react';
import Link from '../routing/Link';
import SuspenseImage from '../SuspenseImage';

export default function ShoppingListPreview(props) {
  const shoppingList = props.shoppingList;
  const recipe = props.shoppingList.recipe;

  return (
    <Link to={`/shopping-lists/${shoppingList.id}`}>
      <div className='App-recipe-thumb'>
        <SuspenseImage src={'http://localhost:3000/' + recipe.imageUrl} className='RecipeThumb-image' />
        <div className='RecipeThumb-content'>
          <div className='RecipeThumb-title'>
            <span>{recipe.title}</span>
          </div>
          <div className='RecipeThumb-author'>
            <span>Dodano: {shoppingList.createdAt}</span>
          </div>
          <div className="meter animate">
            <span style={{ width: `${shoppingList.percentDone}%` }}>{shoppingList.percentDone}%</span>
          </div>
        </div>
      </div>
    </Link>
  )
}