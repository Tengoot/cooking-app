/**
 * @flow
 * @relayHash 87df98aa30447c3f72703a658f9b4ad4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListRootQueryVariables = {|
  id: string
|};
export type ShoppingListRootQueryResponse = {|
  +node: ?{|
    +id?: string,
    +archived?: boolean,
    +peopleCount?: number,
    +note?: string,
    +percentDone?: ?number,
    +shoppingListItems?: $ReadOnlyArray<{|
      +id: string,
      +ticked: boolean,
      +recipeIngredient: {|
        +unit: string,
        +amount: number,
        +ingredient: {|
          +id: string,
          +name: string,
        |},
      |},
    |}>,
    +recipe?: {|
      +id: string,
      +title: string,
      +imageUrl: ?string,
      +peopleCount: number,
      +description: string,
      +user: {|
        +id: string,
        +nick: string,
        +avatarUrl: ?string,
      |},
    |},
  |}
|};
export type ShoppingListRootQuery = {|
  variables: ShoppingListRootQueryVariables,
  response: ShoppingListRootQueryResponse,
|};
*/


/*
query ShoppingListRootQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on ShoppingList {
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
          id
        }
      }
      recipe {
        id
        title
        imageUrl
        peopleCount
        description
        user {
          id
          nick
          avatarUrl
        }
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
  "name": "archived",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "peopleCount",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "note",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "percentDone",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ticked",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v10 = {
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
    }
  ]
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "recipe",
  "storageKey": null,
  "args": null,
  "concreteType": "Recipe",
  "plural": false,
  "selections": [
    (v2/*: any*/),
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
      "name": "imageUrl",
      "args": null,
      "storageKey": null
    },
    (v4/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListRootQuery",
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
            "type": "ShoppingList",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "shoppingListItems",
                "storageKey": null,
                "args": null,
                "concreteType": "ShoppingListItem",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "recipeIngredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RecipeIngredient",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ]
                  }
                ]
              },
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListRootQuery",
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
            "type": "ShoppingList",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "shoppingListItems",
                "storageKey": null,
                "args": null,
                "concreteType": "ShoppingListItem",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "recipeIngredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RecipeIngredient",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              },
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ShoppingListRootQuery",
    "id": null,
    "text": "query ShoppingListRootQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on ShoppingList {\n      id\n      archived\n      peopleCount\n      note\n      percentDone\n      shoppingListItems {\n        id\n        ticked\n        recipeIngredient {\n          unit\n          amount\n          ingredient {\n            id\n            name\n          }\n          id\n        }\n      }\n      recipe {\n        id\n        title\n        imageUrl\n        peopleCount\n        description\n        user {\n          id\n          nick\n          avatarUrl\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '24397992ec9140c13be64cc4a95259aa';
module.exports = node;
