import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import Link from '../routing/Link';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext'

const { useCallback, useState, useContext } = React;

export default function IngredientManagementActions(props) {
  const router = useContext(RoutingContext);

  const managementComponents = () => {
    const isAdmin = localStorage.getItem('role') === 'MODERATOR'
    if (isAdmin) {
      return (
        <div className='Recipe-management-buttons'>
          <Link to={`/ingredients/${props.id}/edit`}>
            <div id="sign-in-button" className="Auth-button">
              <button><span>Edytuj</span></button>
            </div>
          </Link>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }

  return managementComponents();
}