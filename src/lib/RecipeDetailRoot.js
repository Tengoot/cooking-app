import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import SuspenseImage from '../SuspenseImage';

export default function RecipeDetailRoot(props) {
  const { node: recipe } = usePreloadedQuery(
    graphql`
      query RecipeDetailRootQuery($id: ID!) {
        node(id: $id) {
          ... on Recipe {
            id
            title
            shortDescription
            description
            imageUrl
            peopleCount
            recipeIngredients {
              id
              amount
              unit
              ingredient {
                name
                averagePrice
              }
            }
            averageRating
            user {
              nick
              avatarUrl
            }
          }
        }
      }
    `,
    props.prepared.RecipeDetailQuery,
  )

  if (recipe == null) {
    return(<div className='NotFoundLabel'>Recipe Not Found!</div>);
  }

  return (
    <div className='Recipe-container'>
      <div className='Recipe-comments'>Column for comments</div>
      <div className='Recipe-body'>
        <div className="Recipe-image">
          <img src={recipe.imageUrl} />
        </div>
        <div className='Recipe-content'>
          <span className='Recipe-title'>{recipe.title}</span>
          <div className='Recipe-title-thumb'>
            <span>Dodano: {recipe.createdAt}</span>
            <span>Czas przygotowania: {recipe.timeToPrepare}</span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-author-small'>
            <img src={recipe.user.imageUrl} className='User-image-small' />
            <span><strong>{recipe.user.nick}</strong></span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-description-short'>
            <p>{recipe.shortDescription}</p>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-ingredients-title'>
            { recipe.peopleCount ? 'Składniki dla ' + recipe.peopleCount + ' osób' : 'Składniki' }
          </div>
          {/* <div>
            <RecipeIngredientList recipeIngredients={seeds.recipeIngredients} />
          </div> */}
          <div className='Recipe-break' />
          <div className='Recipe-label'>Przygotowanie</div>
          <div className='Recipe-description'>
            <p>{recipe.description}</p>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-user-space'>
            <div className='Recipe-label'>Przepis opublikowany przez</div>
            <div className='Recipe-break' />
            <img src={recipe.user.imageUrl} className='User-image-big' />
            <span><strong>{recipe.user.nick}</strong></span>
          </div>
        </div>
      </div>
      <div className='Recipe-management'>
        <div className='Recipe-management-content'>
          {/* {this.managementButtons()} */}
        </div>
      </div>
    </div>
  );
}