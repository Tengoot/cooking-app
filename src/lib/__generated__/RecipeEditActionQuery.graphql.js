/**
 * @flow
 * @relayHash 6493d0d7c4acbca29f981ec762ce0432
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipeEditActionQueryVariables = {|
  id: string
|};
export type RecipeEditActionQueryResponse = {|
  +node: ?{|
    +id?: string,
    +title?: string,
    +shortDescription?: ?string,
    +description?: string,
    +imageUrl?: ?string,
    +peopleCount?: number,
    +createdAt?: string,
    +timeToPrepare?: string,
    +recipeIngredients?: $ReadOnlyArray<{|
      +id: string,
      +amount: number,
      +unit: string,
      +ingredient: {|
        +id: string,
        +name: string,
        +averagePrice: ?number,
      |},
    |}>,
    +averageRating?: number,
    +user?: {|
      +id: string,
      +nick: string,
      +avatarUrl: ?string,
    |},
  |}
|};
export type RecipeEditActionQuery = {|
  variables: RecipeEditActionQueryVariables,
  response: RecipeEditActionQueryResponse,
|};
*/


/*
query RecipeEditActionQuery(
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
      createdAt
      timeToPrepare
      recipeIngredients {
        id
        amount
        unit
        ingredient {
          id
          name
          averagePrice
        }
      }
      averageRating
      user {
        id
        nick
        avatarUrl
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
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timeToPrepare",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "recipeIngredients",
  "storageKey": null,
  "args": null,
  "concreteType": "RecipeIngredient",
  "plural": true,
  "selections": [
    (v2/*: any*/),
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
        (v2/*: any*/),
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
        }
      ]
    }
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "averageRating",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/),
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RecipeEditActionQuery",
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeEditActionQuery",
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RecipeEditActionQuery",
    "id": null,
    "text": "query RecipeEditActionQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Recipe {\n      id\n      title\n      shortDescription\n      description\n      imageUrl\n      peopleCount\n      createdAt\n      timeToPrepare\n      recipeIngredients {\n        id\n        amount\n        unit\n        ingredient {\n          id\n          name\n          averagePrice\n        }\n      }\n      averageRating\n      user {\n        id\n        nick\n        avatarUrl\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd8fc86856b8497c389ece6eea12636d';
module.exports = node;
