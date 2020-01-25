import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import SuspenseImage from '../SuspenseImage';
import IngredientManagementActions from './IngredientManagementActions'

export default function IngredientDetailRoot(props) {
  const { node: ingredient } = usePreloadedQuery(
    graphql`
      query IngredientDetailRootQuery($id: ID!) {
        node(id: $id) {
          ... on Ingredient {
            id
            name
            averagePrice
            description
            kcal
          }
        }
      }
    `,
    props.prepared.IngredientDetailQuery,
  );

  if (ingredient === null) {
    return(<div className='NotFoundLabel'>Ingredient Not Found!</div>);
  }

  return(
    <div className="Recipe-container">
        <div></div>
        <div className='Recipe-body'>
          <div className="Recipe-image">
            <SuspenseImage src={ingredient.imageUrl} />
          </div>
          <div className='Recipe-content'>
            <span className='Recipe-title'>{ingredient.name}</span>
            <div className='Recipe-break' />
            <div className='Recipe-description-short'>
              <p><strong>Średnia cena:</strong> {ingredient.averagePrice}</p>
              <p><strong>kcal:</strong> {ingredient.kcal}</p>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-description'>
              <p>{ingredient.description}</p>
            </div>
            <div className='Recipe-break' />
          </div>
        </div>
        <div className='Recipe-management'>
          <div className='Recipe-management-content'>
            {IngredientManagementActions(ingredient)}
          </div>
        </div>
      </div>
  );
}