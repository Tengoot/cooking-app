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
          {},
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
        component: JSResource('RecipeRootList', () => import('./lib/RecipeRootList')),
        prepare: params => {},
      },
      {
        path: '/recipes',
        exact: true,
        component: JSResource('RecipeRootList', () => import('./lib/RecipeRootList')),
        prepare: params => {},
      },
      {
        path: '/shopping-lists',
        exact: true,
        component: JSResource('ShoppingListRootList', () => import('./lib/ShoppingListRootList')),
        prepare: params => {},
      },
      {
        path: '/new-recipe',
        exact: true,
        component: JSResource('RecipeNewAction', () => import('./lib/RecipeNewAction')),
        prepare: params => {},
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
        path: '/recipes/:id/edit/',
        component: JSResource('RecipeEditAction', () => import('./lib/RecipeEditAction')),
        prepare: params => {
          const RecipeEditQuery = require('./lib/__generated__/RecipeEditActionQuery.graphql');
          return {
            RecipeEditQuery: preloadQuery(
              RelayEnvironment,
              RecipeEditQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network' },
            )
          }
        }
      },
      {
        path: '/shopping-lists/:id',
        component: JSResource('ShoppingListRoot', () => import('./lib/ShoppingListRoot')),
        prepare: params => {
          const ShoppingListRootQuery = require('./lib/__generated__/ShoppingListRootQuery.graphql');
          return {
            ShoppingListRootQuery: preloadQuery(
              RelayEnvironment,
              ShoppingListRootQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network', fetchKey: Date.now() },
            )
          }
        },
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
      },
      {
        path: '/ingredients/:id/edit/',
        component: JSResource('IngredientEditAction', () => import('./lib/IngredientEditAction')),
        prepare: params => {
          const IngredientEditQuery = require('./lib/__generated__/IngredientEditActionQuery.graphql');
          return {
            IngredientEditQuery: preloadQuery(
              RelayEnvironment,
              IngredientEditQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network' },
            )
          }
        }
      },
      {
        path: '/ingredients/:id',
        component: JSResource('IngredientDetailRoot', () => import('./lib/IngredientDetailRoot')),
        prepare: params => {
          const IngredientDetailQuery = require('./lib/__generated__/IngredientDetailRootQuery.graphql');
          return {
            IngredientDetailQuery: preloadQuery(
              RelayEnvironment,
              IngredientDetailQuery,
              {
                id: params.id,
              },
              { fetchPolicy: 'store-or-network' },
            )
          }
        }
      },
    ],
  },
]

export default routes;