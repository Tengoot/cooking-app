/**
 * @flow
 * @relayHash 7ab1ee7f857bf4abd8b68e173554b113
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RecipeDetailComments_recipe$ref = any;
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
    +createdAt?: string,
    +timeToPrepare?: string,
    +averageRating?: number,
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
    +user?: {|
      +id: string,
      +nick: string,
      +avatarUrl: ?string,
    |},
    +$fragmentRefs: RecipeDetailComments_recipe$ref,
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
      createdAt
      timeToPrepare
      averageRating
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
      user {
        id
        nick
        avatarUrl
      }
      ...RecipeDetailComments_recipe
    }
    id
  }
}

fragment RecipeDetailComments_recipe on Recipe {
  comments {
    id
    rating
    text
    user {
      id
      avatarUrl
      nick
    }
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
  "kind": "ScalarField",
  "alias": null,
  "name": "averageRating",
  "args": null,
  "storageKey": null
},
v11 = {
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
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nick",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/)
  ]
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v14/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "RecipeDetailComments_recipe",
                "args": null
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v14/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comments",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "rating",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
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
                      (v2/*: any*/),
                      (v13/*: any*/),
                      (v12/*: any*/)
                    ]
                  }
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
    "text": "query RecipeDetailRootQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Recipe {\n      id\n      title\n      shortDescription\n      description\n      imageUrl\n      peopleCount\n      createdAt\n      timeToPrepare\n      averageRating\n      recipeIngredients {\n        id\n        amount\n        unit\n        ingredient {\n          id\n          name\n          averagePrice\n        }\n      }\n      user {\n        id\n        nick\n        avatarUrl\n      }\n      ...RecipeDetailComments_recipe\n    }\n    id\n  }\n}\n\nfragment RecipeDetailComments_recipe on Recipe {\n  comments {\n    id\n    rating\n    text\n    user {\n      id\n      avatarUrl\n      nick\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5a4ce312cde509dc5335fc4963706f4';
module.exports = node;
