/**
 * @flow
 * @relayHash 58145fe5d567c7f4b0b80775d035ce63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRecipeMutationInput = {|
  clientMutationId?: ?string,
  recipeId: string,
|};
export type RecipeManagementActionsDeleteRecipeMutationVariables = {|
  input: DeleteRecipeMutationInput
|};
export type RecipeManagementActionsDeleteRecipeMutationResponse = {|
  +deleteRecipe: ?{|
    +success: ?boolean,
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type RecipeManagementActionsDeleteRecipeMutation = {|
  variables: RecipeManagementActionsDeleteRecipeMutationVariables,
  response: RecipeManagementActionsDeleteRecipeMutationResponse,
|};
*/


/*
mutation RecipeManagementActionsDeleteRecipeMutation(
  $input: DeleteRecipeMutationInput!
) {
  deleteRecipe(input: $input) {
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
    "type": "DeleteRecipeMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteRecipe",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteRecipeMutationPayload",
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
    "name": "RecipeManagementActionsDeleteRecipeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeManagementActionsDeleteRecipeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RecipeManagementActionsDeleteRecipeMutation",
    "id": null,
    "text": "mutation RecipeManagementActionsDeleteRecipeMutation(\n  $input: DeleteRecipeMutationInput!\n) {\n  deleteRecipe(input: $input) {\n    success\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7a34d148411e28f27d95ff40c62212d0';
module.exports = node;
