/**
 * @flow
 * @relayHash 929ad45dcb9b9d25a2617b9295023b2e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteShoppingListMutationInput = {|
  clientMutationId?: ?string,
  shoppingListId: string,
|};
export type ShoppingListManagementActionsDeleteShoppingListMutationVariables = {|
  input: DeleteShoppingListMutationInput
|};
export type ShoppingListManagementActionsDeleteShoppingListMutationResponse = {|
  +deleteShoppingList: ?{|
    +success: boolean,
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type ShoppingListManagementActionsDeleteShoppingListMutation = {|
  variables: ShoppingListManagementActionsDeleteShoppingListMutationVariables,
  response: ShoppingListManagementActionsDeleteShoppingListMutationResponse,
|};
*/


/*
mutation ShoppingListManagementActionsDeleteShoppingListMutation(
  $input: DeleteShoppingListMutationInput!
) {
  deleteShoppingList(input: $input) {
    success
    errors
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteShoppingListMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteShoppingList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteShoppingListMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
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
    "name": "ShoppingListManagementActionsDeleteShoppingListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListManagementActionsDeleteShoppingListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ShoppingListManagementActionsDeleteShoppingListMutation",
    "id": null,
    "text": "mutation ShoppingListManagementActionsDeleteShoppingListMutation(\n  $input: DeleteShoppingListMutationInput!\n) {\n  deleteShoppingList(input: $input) {\n    success\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1bf7a180e96c0cf9eee76e92428fdb65';
module.exports = node;
