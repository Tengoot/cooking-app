import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import Link from '../routing/Link';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext'

const { useCallback, useState, useContext } = React;

const DeleteRecipeMutation = graphql`
  mutation RecipeManagementActionsDeleteRecipeMutation($input: DeleteRecipeMutationInput!) {
    deleteRecipe(input: $input) {
      success
      errors
    }
  }
`;

export default function RecipeManagementActions(props) {
  const [isdeleteRecipePending, deleteRecipe] = UseMutation(DeleteRecipeMutation);
  const router = useContext(RoutingContext);

  const onRecipeDelete = useCallback(
    event => {
      event.preventDefault();

      deleteRecipe({
        variables: {
          input: {
            recipeId: props.id,
          }
        }
      });

      router.history.push('/');
    },
    [deleteRecipe],
  );

  const managementComponents = () => {
    const isAuthor = props.user && localStorage.getItem('signedIn') === props.user.id;
    const isAdmin = localStorage.getItem('role') === 'MODERATOR' || localStorage.getItem('role') === 'ADMIN'
    if (isAuthor || isAdmin) {
      return (
        <div className='Recipe-management-buttons'>
          <Link to={`/recipes/${props.id}/edit`}>
            <div id="sign-in-button" className="Auth-button">
              <button><span>Edytuj</span></button>
            </div>
          </Link>
          <div id="sign-in-button" className="Auth-button">
            <button onClick={(e) => { if (window.confirm('Naprawdę chcesz usunąć ten przepis?')) onRecipeDelete(e) }}><span>Usuń</span></button>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }

  return managementComponents();
}