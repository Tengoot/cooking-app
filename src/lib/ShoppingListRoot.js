import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { toast } from 'react-toastify';
import UseMutation from '../UseMutation';
import Link from '../routing/Link';
import SuspenseImage from '../SuspenseImage';
import ShoppingListManagementActions from './ShoppingListManagementActions';

const { useCallback, useState, useTransition } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

const ToggleShoppingListItemMutation = graphql`
  mutation ShoppingListRootToggleShoppingListItemMutation($input: ToggleShoppingListItemMutationInput!) {
    toggleShoppingListItem(input: $input) {
      shoppingListItem {
        id
        ticked
        recipeIngredient {
          unit
          amount
          ingredient {
            id
            name
          }
        }
      }
      errors
    }
  }
`;

export default function ShoppingListRoot(props) {
  const [tick, setTick] = useState(0);
  const { node: shoppingList } = useLazyLoadQuery(
    graphql`
      query ShoppingListRootQuery($id: ID!) {
        node(id: $id) {
          ... on ShoppingList {
            id
            archived
            peopleCount
            note
            percentDone
            shoppingListItems {
              id
              ticked
              recipeIngredient {
                unit
                amount
                ingredient {
                  id
                  name
                }
              }
            }
            recipe {
              id
              title
              imageUrl
              peopleCount
              description
              user {
                id
                nick
                avatarUrl
              }
            }
          }
        }
      }
    `,
    { id: props.routeData.params.id, tick: tick },
    { fetchPolicy: 'store-or-network' },
  );

  if (shoppingList === null) {
    return(<div className='NotFoundLabel'>Shopping List Not Found!</div>);
  }

  const [isToggleShoppingListItemPending, toggleShoppingListItem] = UseMutation(ToggleShoppingListItemMutation);

  const onCheckItemClick = useCallback(
    (event, id) => {
      event.preventDefault();

      toggleShoppingListItem({
        variables: {
          input: {
            shoppingListItemId: id,
          }
        },
        updater: (store, response) => {
          if (response.toggleShoppingListItem.shoppingListItem) {
            setTick(tick + 1);
          } else {
            toast.error('Coś poszło nie tak...', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            })
          }
        },
      });
    },
    [toggleShoppingListItem, tick, setTick],
  )

  const recipe = shoppingList.recipe;

  const checkListItems = () => {
    return shoppingList.shoppingListItems.map((element) => (
      <p>
      <input type="checkbox" name={`checklist-${element.id}`} data-value={element.id} onClick={(event) => onCheckItemClick(event, element.id)} checked={element.ticked} />
        <label for={`checklist-${element.id}`}>
          {`${parseFloat(element.recipeIngredient.amount * (shoppingList.peopleCount / shoppingList.recipe.peopleCount)).toFixed(1)  || ''} ${element.recipeIngredient.unit || ''} ${element.recipeIngredient.ingredient.name}`.trim()}
        </label>
      </p>
    ));
  }

  return (
    <div className='Recipe-container'>
      <div className='Recipe-comments'></div>
      <div className='Recipe-body'>
        <div className="Recipe-image">
          <SuspenseImage
            src={recipe.imageUrl ? 'http://localhost:3000/' + recipe.imageUrl : 'https://via.placeholder.com/500'}
          />
        </div>
        <div className='Recipe-content'>
          <span className='Recipe-title'>{recipe.title}</span>
          <div className='Recipe-break' />
          <div className='Recipe-author-small'>
            <SuspenseImage src={recipe.user.avatarUrl ? "http://localhost:3000" + recipe.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
            <span><strong>{recipe.user.nick}</strong></span>
          </div>
          <div className="meter animate">
            <span style={{ width: `${shoppingList.percentDone}%` }}>{shoppingList.percentDone}%</span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-ingredients-title'>
            { shoppingList.peopleCount ? 'Składniki dla ' + shoppingList.peopleCount + ' osób' : 'Składniki' }
          </div>
          <div className="checklist-container">
            {checkListItems()}
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-description'>
            <p>{shoppingList.notes}</p>
          </div>
        </div>
        <div className='Recipe-break' />
        <div className='Recipe-label'>Przygotowanie</div>
        <div className='Recipe-description'>
          <p>{recipe.description}</p>
        </div>
        <div className='Recipe-break' />
        <div className='Recipe-user-space'>
          <div className='Recipe-label'>Przepis opublikowany przez</div>
          <div className='Recipe-break' />
          <SuspenseImage src={recipe.user.avatarUrl ? "http://localhost:3000" + recipe.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-big' />
          <span><strong>{recipe.user.nick}</strong></span>
        </div>
      </div>
      <div className='Recipe-management'>
        <div className='Recipe-management-content'>
          {ShoppingListManagementActions(shoppingList)}
        </div>
      </div>
    </div>
  )
}