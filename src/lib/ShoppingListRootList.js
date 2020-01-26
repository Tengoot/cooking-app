import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import ShoppingListPreview from './ShoppingListPreview'

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

const { useCallback, useState, useTransition } = React;

export default function ShoppingListRootList(props) {
  const [count, setCount] = useState(10);
  const [archived, setArchived] = useState(false);

  const data = useLazyLoadQuery(
    graphql`
      query ShoppingListRootListShoppingListsQuery($count: Int!, $archived: Boolean!) {
        shoppingLists(first: $count, archived: $archived) {
          pageInfo {
            hasNextPage
          }
          edges {
            node {
              id
              archived
              percentDone
              createdAt
              recipe {
                id
                title
                imageUrl
              }
            }
          }
        }
      }
    `,
    { count: count, archived: archived },
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

  const toggleArchived = useCallback(
    (event) => {
      event.preventDefault();

      startTransition(() => {
        setArchived(!archived);
        setCount(10);
      })
    },
    [archived, setArchived, setCount],
  )

  const shoppingListComponents = data.shoppingLists.edges.map((node) => (
    <ShoppingListPreview
      key={'ShoppingListPreview-' + node.node.id}
      shoppingList={node.node}
    />
  ));

  const actualCount = data.shoppingLists.edges.length;

  return(
    <div className='RecipeThumb-List-Container'>
      <div id="toggle-archive" className="Button-big">
        <button onClick={toggleArchived}><span>{archived ? 'Zarchiwizowane' : 'Aktywne'}</span></button>
      </div>
      <div className='RecipeThumb-List'>
        <div className='RecipeThumb-Column'>
          {shoppingListComponents.slice((actualCount/2), actualCount)}
        </div>
        <div className='RecipeThumb-Column'>
          {shoppingListComponents.slice(0, (actualCount/2))}
        </div>
      </div>
      <div className="RecipeThumb-List-pagination-label" onClick={loadMore}>
        <span>{data.shoppingLists.pageInfo.hasNextPage && 'Zobacz więcej'}</span>
      </div>
    </div>
  );
}