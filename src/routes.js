import JSResource from './JSResource';
import { preloadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    component: JSResource('Root', () => import('./Root')),
    prepare: params => {
      const RootQuery = require('./__generated__/RootQuery.graphql');
      return {
        rootQuery: preloadQuery(
          RelayEnvironment,
          RootQuery,
          {
            owner: 'Bartosz',
            name: 'relay',
          },
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' },
        ),
      };
    },
    routes: [
      {
        path: '/',
        exact: true,
        component: JSResource('notFoundPage', () => import('./lib/notFoundPage')),
        prepare: params => {
          const userQuery = require('./__generated__/RootQuery.graphql');
          return {
            userQuery: preloadQuery(
              RelayEnvironment,
              userQuery,
              {
                owner: 'Bartosz',
                name: 'relay',
              },
              { fetchPolicy: 'store-or-network' },
            ),
          };
        },
      },
      {
        path: '/sign-in',
        exact: true,
        component: JSResource('SignInAction', () => import('./lib/SignInAction')),
        prepare: params => {},
      },
      {
        path: '/sign-up',
        exact: true,
        component: JSResource('SignUpAction', () => import('./lib/SignUpAction')),
        prepare: params => {},
      },
      {
        path: '/recipes/:id',
        component: JSResource('RecipeDetailRoot', () => import('./lib/RecipeDetailRoot')),
        prepare: params => {
          const RecipeDetailQuery = require('./lib/__generated__/RecipeDetailRootQuery.graphql');
          return {
            RecipeDetailQuery: preloadQuery(
              RelayEnvironment,
              RecipeDetailQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network' },
            )
          }
        }
      }
    ],
  },
]

export default routes;