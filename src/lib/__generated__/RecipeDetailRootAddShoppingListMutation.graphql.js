/**
 * @flow
 * @relayHash 0800eda08cccf2d14fbe3dc8937a95af
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddShoppingListMutationInput = {|
  clientMutationId?: ?string,
  peopleCount: number,
  recipeId: string,
|};
export type RecipeDetailRootAddShoppingListMutationVariables = {|
  input: AddShoppingListMutationInput
|};
export type RecipeDetailRootAddShoppingListMutationResponse = {|
  +addShoppingList: ?{|
    +shoppingList: ?{|
      +id: string,
      +archived: boolean,
      +peopleCount: number,
      +note: string,
      +shoppingListItems: $ReadOnlyArray<{|
        +id: string,
        +ticked: boolean,
        +recipeIngredient: {|
          +ingredient: {|
            +name: string
          |}
        |},
      |}>,
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type RecipeDetailRootAddShoppingListMutation = {|
  variables: RecipeDetailRootAddShoppingListMutationVariables,
  response: RecipeDetailRootAddShoppingListMutationResponse,
|};
*/


/*
mutation RecipeDetailRootAddShoppingListMutation(
  $input: AddShoppingListMutationInput!
) {
  addShoppingList(input: $input) {
    shoppingList {
      id
      archived
      peopleCount
      note
      shoppingListItems {
        id
        ticked
        recipeIngredient {
          ingredient {
            name
            id
          }
          id
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
    "type": "AddShoppingListMutationInput!",
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
  "name": "ticked",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
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
    "name": "RecipeDetailRootAddShoppingListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addShoppingList",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddShoppingListMutationPayload",
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
                  (v6/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "recipeIngredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RecipeIngredient",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "ingredient",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Ingredient",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeDetailRootAddShoppingListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addShoppingList",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddShoppingListMutationPayload",
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
                  (v6/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "recipeIngredient",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RecipeIngredient",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "ingredient",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Ingredient",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RecipeDetailRootAddShoppingListMutation",
    "id": null,
    "text": "mutation RecipeDetailRootAddShoppingListMutation(\n  $input: AddShoppingListMutationInput!\n) {\n  addShoppingList(input: $input) {\n    shoppingList {\n      id\n      archived\n      peopleCount\n      note\n      shoppingListItems {\n        id\n        ticked\n        recipeIngredient {\n          ingredient {\n            name\n            id\n          }\n          id\n        }\n      }\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '505a5806f43f7d920a6ad10c851793c6';
module.exports = node;
