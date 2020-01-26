/**
 * @flow
 * @relayHash fcf791103ded980b1c078d1b3f83c921
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCommentMutationInput = {|
  clientMutationId?: ?string,
  commentId: string,
|};
export type RecipeCommentRootDeleteCommentMutationVariables = {|
  input: DeleteCommentMutationInput
|};
export type RecipeCommentRootDeleteCommentMutationResponse = {|
  +deleteComment: ?{|
    +success: boolean,
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type RecipeCommentRootDeleteCommentMutation = {|
  variables: RecipeCommentRootDeleteCommentMutationVariables,
  response: RecipeCommentRootDeleteCommentMutationResponse,
|};
*/


/*
mutation RecipeCommentRootDeleteCommentMutation(
  $input: DeleteCommentMutationInput!
) {
  deleteComment(input: $input) {
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
    "type": "DeleteCommentMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCommentMutationPayload",
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
    "name": "RecipeCommentRootDeleteCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeCommentRootDeleteCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RecipeCommentRootDeleteCommentMutation",
    "id": null,
    "text": "mutation RecipeCommentRootDeleteCommentMutation(\n  $input: DeleteCommentMutationInput!\n) {\n  deleteComment(input: $input) {\n    success\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '472df25c5a14d17e4e62b3841d02947c';
module.exports = node;
