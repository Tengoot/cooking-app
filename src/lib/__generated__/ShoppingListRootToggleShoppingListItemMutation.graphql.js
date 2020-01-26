/**
 * @flow
 * @relayHash bc43007146536c1ad5fc67267391b101
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleShoppingListItemMutationInput = {|
  clientMutationId?: ?string,
  shoppingListItemId: string,
|};
export type ShoppingListRootToggleShoppingListItemMutationVariables = {|
  input: ToggleShoppingListItemMutationInput
|};
export type ShoppingListRootToggleShoppingListItemMutationResponse = {|
  +toggleShoppingListItem: ?{|
    +shoppingListItem: ?{|
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
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type ShoppingListRootToggleShoppingListItemMutation = {|
  variables: ShoppingListRootToggleShoppingListItemMutationVariables,
  response: ShoppingListRootToggleShoppingListItemMutationResponse,
|};
*/


/*
mutation ShoppingListRootToggleShoppingListItemMutation(
  $input: ToggleShoppingListItemMutationInput!
) {
  toggleShoppingListItem(input: $input) {
    shoppingListItem {
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
    errors
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToggleShoppingListItemMutationInput!",
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
  "name": "ticked",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v6 = {
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
v7 = {
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
    "name": "ShoppingListRootToggleShoppingListItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleShoppingListItem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleShoppingListItemMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingListItem",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingListItem",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "recipeIngredient",
                "storageKey": null,
                "args": null,
                "concreteType": "RecipeIngredient",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListRootToggleShoppingListItemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleShoppingListItem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleShoppingListItemMutationPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingListItem",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingListItem",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "recipeIngredient",
                "storageKey": null,
                "args": null,
                "concreteType": "RecipeIngredient",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ShoppingListRootToggleShoppingListItemMutation",
    "id": null,
    "text": "mutation ShoppingListRootToggleShoppingListItemMutation(\n  $input: ToggleShoppingListItemMutationInput!\n) {\n  toggleShoppingListItem(input: $input) {\n    shoppingListItem {\n      id\n      ticked\n      recipeIngredient {\n        unit\n        amount\n        ingredient {\n          id\n          name\n        }\n        id\n      }\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bcfdbe55ac844a15ef8ee78f1a6a23e';
module.exports = node;
