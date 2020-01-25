import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import RecipePreview from './RecipePreview'
import Link from '../routing/Link';

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

const { useCallback, useState, useTransition, Suspense } = React;

export default function RecipeRootList(props) {
  const [count, setCount] = useState(10);

  const data = useLazyLoadQuery(
    graphql`
      query RecipeRootListRecipesQuery($count: Int!) {
        recipeList(first: $count) {
          pageInfo {
            hasNextPage
          }
          edges {
            node {
              id
              imageUrl
              title
              user {
                nick
              }
            }
          }
        }
      }
    `,
    { count: count },
    { fetchPolicy: 'store-or-network' },
  );

  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  const loadMore = useCallback(
    event => {
      event.preventDefault();
      startTransition(() => {
        setCount(count + 10);
      })
    },
    [count, setCount],
  );

  const recipeComponents = data.recipeList.edges.map((node) => (
      <RecipePreview
        key={'RecipePreview-' + node.node.id}
        recipe={node.node}
      />
  ));

  function newRecipeButton() {
    if(localStorage.getItem('signedIn')) {
      return (
        <Link to="/new-recipe">
          <div id="sign-in-button" className="Button-big">
            <button><span>Utwórz przepis</span></button>
          </div>
        </Link>
      );
    }
  }

  return(
    <div className='RecipeThumb-List-Container'>
      {newRecipeButton()}
      <div className='RecipeThumb-List'>
        <div className='RecipeThumb-Column'>
          {recipeComponents.slice(0, (count/2))}
        </div>
        <div className='RecipeThumb-Column'>
          {recipeComponents.slice((count/2), count)}
        </div>
      </div>
      <div className="RecipeThumb-List-pagination-label" onClick={loadMore}>
        <span>{data.recipeList.pageInfo.hasNextPage && 'Zobacz więcej'}</span>
      </div>
    </div>
  );
}