import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext';

const { useCallback, useState, useContext } = React;

const SignInMutation = graphql`
  mutation SignOutActionSignOutMutation($input: SignOutMutationInput!) {
    signOut(input: $input) {
      user {
        id
        nick
        avatarUrl
      }
    }
  }
`;

export default function signOutAction() {
  const [isSignOutPending, signOut] = UseMutation(SignInMutation);
  const router = useContext(RoutingContext);
  //: DOdać tu html przycisku, akcje onClick mutacja i redirect i tyle, przycisk jest na headerze

  const onClick = useCallback(
    event => {
      event.preventDefault();
      signOut({
        variables: {
          input: {}
        },
        updater: store => {
          localStorage.removeItem('signedIn');
          router.history.push('/');
        }
      })
    },
  );

  return (
    <div id="sign-up-button" className="Auth-button">
      <button onClick={onClick}><span>Wyloguj</span></button>
    </div>
  );
}