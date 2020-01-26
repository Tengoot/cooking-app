/**
 * @flow
 * @relayHash d0b09b98d8a333b22f391fe67fab3419
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditShoppingListMutationInput = {|
  archived?: ?boolean,
  clientMutationId?: ?string,
  note?: ?string,
  peopleCount?: ?number,
  shoppingListId: string,
|};
export type ShoppingListManagementActionsEditShoppingListMutationVariables = {|
  input: EditShoppingListMutationInput
|};
export type ShoppingListManagementActionsEditShoppingListMutationResponse = {|
  +editShoppingList: ?{|
    +shoppingList: ?{|
      +id: string,
      +archived: boolean,
      +peopleCount: number,
      +note: string,
      +percentDone: ?number,
      +shoppingListItems: $ReadOnlyArray<{|
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
      +recipe: {|
        +id: string,
        +title: string,
        +imageUrl: ?string,
        +user: {|
          +id: string,
          +nick: string,
          +avatarUrl: ?string,
        |},
      |},
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type ShoppingListManagementActionsEditShoppingListMutation = {|
  variables: ShoppingListManagementActionsEditShoppingListMutationVariables,
  response: ShoppingListManagementActionsEditShoppingListMutationResponse,
|};
*/


/*
mutation ShoppingListManagementActionsEditShoppingListMutation(
  $input: EditShoppingListMutationInput!
) {
  editShoppingList(input: $input) {
    shoppingList {
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
        user {
          id
          nick
          avatarUrl
        }
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
    "type": "EditShoppingListMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "errors",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListManagementActionsEditShoppingListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editShoppingList",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EditShoppingListMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingList",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingList",
            "plural": false,
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
          },
          (v12/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListManagementActionsEditShoppingListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editShoppingList",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EditShoppingListMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingList",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingList",
            "plural": false,
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
                      (v10/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              },
              (v11/*: any*/)
            ]
          },
          (v12/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ShoppingListManagementActionsEditShoppingListMutation",
    "id": null,
    "text": "mutation ShoppingListManagementActionsEditShoppingListMutation(\n  $input: EditShoppingListMutationInput!\n) {\n  editShoppingList(input: $input) {\n    shoppingList {\n      id\n      archived\n      peopleCount\n      note\n      percentDone\n      shoppingListItems {\n        id\n        ticked\n        recipeIngredient {\n          unit\n          amount\n          ingredient {\n            id\n            name\n          }\n          id\n        }\n      }\n      recipe {\n        id\n        title\n        imageUrl\n        user {\n          id\n          nick\n          avatarUrl\n        }\n      }\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8ad93d32fa8acbd477380a124addd0a';
module.exports = node;
