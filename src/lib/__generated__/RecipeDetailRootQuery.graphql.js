/**
 * @flow
 * @relayHash 947e82858de9acdb6f6e6cacef50eb4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipeDetailRootQueryVariables = {|
  id: string
|};
export type RecipeDetailRootQueryResponse = {|
  +node: ?{|
    +id?: string,
    +title?: string,
    +shortDescription?: ?string,
    +description?: string,
    +imageUrl?: ?string,
    +peopleCount?: number,
    +recipeIngredients?: $ReadOnlyArray<{|
      +id: string,
      +amount: number,
      +unit: string,
      +ingredient: {|
        +name: string,
        +averagePrice: ?number,
      |},
    |}>,
    +averageRating?: number,
    +user?: {|
      +nick: string,
      +avatarUrl: ?string,
    |},
  |}
|};
export type RecipeDetailRootQuery = {|
  variables: RecipeDetailRootQueryVariables,
  response: RecipeDetailRootQueryResponse,
|};
*/


/*
query RecipeDetailRootQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Recipe {
      id
      title
      shortDescription
      description
      imageUrl
      peopleCount
      recipeIngredients {
        id
        amount
        unit
        ingredient {
          name
          averagePrice
          id
        }
      }
      averageRating
      user {
        nick
        avatarUrl
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "shortDescription",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "imageUrl",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "peopleCount",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averagePrice",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageRating",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nick",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RecipeDetailRootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Recipe",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "recipeIngredients",
                "storageKey": null,
                "args": null,
                "concreteType": "RecipeIngredient",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ingredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Ingredient",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v11/*: any*/)
                    ]
                  }
                ]
              },
              (v12/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeDetailRootQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Recipe",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "recipeIngredients",
                "storageKey": null,
                "args": null,
                "concreteType": "RecipeIngredient",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "ingredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Ingredient",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              },
              (v12/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RecipeDetailRootQuery",
    "id": null,
    "text": "query RecipeDetailRootQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Recipe {\n      id\n      title\n      shortDescription\n      description\n      imageUrl\n      peopleCount\n      recipeIngredients {\n        id\n        amount\n        unit\n        ingredient {\n          name\n          averagePrice\n          id\n        }\n      }\n      averageRating\n      user {\n        nick\n        avatarUrl\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '297fe8464f660f19e73fc0f89aa74369';
module.exports = node;
