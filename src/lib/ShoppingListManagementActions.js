import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import Link from '../routing/Link';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext'

const { useCallback, useState, useContext } = React;

const DeleteShoppingListMutation = graphql`
  mutation ShoppingListManagementActionsDeleteShoppingListMutation($input: DeleteShoppingListMutationInput!) {
    deleteShoppingList(input: $input) {
      success
      errors
    }
  }
`;

const EditShoppingListMutation = graphql`
  mutation ShoppingListManagementActionsEditShoppingListMutation($input: EditShoppingListMutationInput!) {
    editShoppingList(input: $input) {
      shoppingList {
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
          user {
            id
            nick
            avatarUrl
          }
        }
      }
      errors
    }
  }
`;

export default function ShoppingListManagementActions(props) {
  const [isDeleteShoppingListPending, deleteShoppingList] = UseMutation(DeleteShoppingListMutation);
  const [isEditShoppingListPending, editShoppingList] = UseMutation(EditShoppingListMutation);
  const router = useContext(RoutingContext);

  const onShoppingListDelete = useCallback(
    event => {
      event.preventDefault();

      deleteShoppingList({
        variables: {
          input: {
            shoppingListId: props.id,
          }
        }
      });

      router.history.push('/shopping-lists');
    },
    [deleteShoppingList]
  );

  const onShoppingListArchive = useCallback(
    event => {
      event.preventDefault();

      editShoppingList({
        variables: {
          input: {
            shoppingListId: props.id,
            archived: true,
          }
        }
      });
    },
    [editShoppingList]
  )

  const onShoppingListUnarchive = useCallback(
    event => {
      event.preventDefault();

      editShoppingList({
        variables: {
          input: {
            shoppingListId: props.id,
            archived: false,
          }
        }
      });
    },
    [editShoppingList]
  )

  const firstButton = () => {
    if (props.archived) {
      return (
        <div id="sign-in-button" className="Auth-button">
          <button onClick={(e) => { if (window.confirm('Naprawdę chcesz przywrócić tę listę?')) onShoppingListUnarchive(e) }}><span>Przywróć</span></button>
        </div>
      )
    } else {
      return (
        <div id="sign-in-button" className="Auth-button">
          <button onClick={(e) => { if (window.confirm('Naprawdę chcesz zarchiwizować tę listę?')) onShoppingListArchive(e) }}><span>Archiwizuj</span></button>
        </div>
      )
    }
  }

  return (
    <div className='Recipe-management-buttons'>
      {firstButton()}
      <div id="sign-in-button" className="Auth-button">
        <button onClick={(e) => { if (window.confirm('Naprawdę chcesz usunąć tę listę?')) onShoppingListDelete(e) }}><span>Usuń</span></button>
      </div>
    </div>
  );
}