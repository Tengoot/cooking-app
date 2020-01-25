/**
 * @flow
 * @relayHash 063e73c1793f73d0ef040e2929d156f5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddRecipeMutationInput = {|
  clientMutationId?: ?string,
  description: string,
  imageDataUri?: ?string,
  peopleCount: number,
  shortDescription?: ?string,
  timeToPrepare: string,
  title: string,
|};
export type RecipeNewActionAddRecipeMutationVariables = {|
  input: AddRecipeMutationInput
|};
export type RecipeNewActionAddRecipeMutationResponse = {|
  +addRecipe: ?{|
    +recipe: ?{|
      +id: string,
      +title: string,
      +shortDescription: ?string,
      +description: string,
      +imageUrl: ?string,
      +peopleCount: number,
      +createdAt: string,
      +recipeIngredients: $ReadOnlyArray<{|
        +id: string,
        +amount: number,
        +unit: string,
        +ingredient: {|
          +id: string,
          +name: string,
          +averagePrice: ?number,
          +description: ?string,
          +kcal: ?number,
        |},
      |}>,
      +averageRating: number,
      +user: {|
        +id: string,
        +nick: string,
        +avatarUrl: ?string,
      |},
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type RecipeNewActionAddRecipeMutation = {|
  variables: RecipeNewActionAddRecipeMutationVariables,
  response: RecipeNewActionAddRecipeMutationResponse,
|};
*/


/*
mutation RecipeNewActionAddRecipeMutation(
  $input: AddRecipeMutationInput!
) {
  addRecipe(input: $input) {
    recipe {
      id
      title
      shortDescription
      description
      imageUrl
      peopleCount
      createdAt
      recipeIngredients {
        id
        amount
        unit
        ingredient {
          id
          name
          averagePrice
          description
          kcal
        }
      }
      averageRating
      user {
        id
        nick
        avatarUrl
      }
    }
    errors
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddRecipeMutationInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addRecipe",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddRecipeMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "recipe",
        "storageKey": null,
        "args": null,
        "concreteType": "Recipe",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shortDescription",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "peopleCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "recipeIngredients",
            "storageKey": null,
            "args": null,
            "concreteType": "RecipeIngredient",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "amount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "unit",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "ingredient",
                "storageKey": null,
                "args": null,
                "concreteType": "Ingredient",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "averagePrice",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "kcal",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "averageRating",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "nick",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatarUrl",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "errors",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RecipeNewActionAddRecipeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeNewActionAddRecipeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RecipeNewActionAddRecipeMutation",
    "id": null,
    "text": "mutation RecipeNewActionAddRecipeMutation(\n  $input: AddRecipeMutationInput!\n) {\n  addRecipe(input: $input) {\n    recipe {\n      id\n      title\n      shortDescription\n      description\n      imageUrl\n      peopleCount\n      createdAt\n      recipeIngredients {\n        id\n        amount\n        unit\n        ingredient {\n          id\n          name\n          averagePrice\n          description\n          kcal\n        }\n      }\n      averageRating\n      user {\n        id\n        nick\n        avatarUrl\n      }\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '512a029c9cd89f5a31749a61b41890bb';
module.exports = node;
