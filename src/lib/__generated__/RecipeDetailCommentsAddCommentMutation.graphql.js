/**
 * @flow
 * @relayHash 740f3d314060ceb73b7f0635b616eb78
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddCommentMutationInput = {|
  clientMutationId?: ?string,
  rating?: ?number,
  recipeId: string,
  text?: ?string,
|};
export type RecipeDetailCommentsAddCommentMutationVariables = {|
  input: AddCommentMutationInput
|};
export type RecipeDetailCommentsAddCommentMutationResponse = {|
  +addComment: ?{|
    +comment: ?{|
      +id: string,
      +rating: ?number,
      +text: ?string,
      +user: {|
        +id: string,
        +avatarUrl: ?string,
        +nick: string,
      |},
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type RecipeDetailCommentsAddCommentMutation = {|
  variables: RecipeDetailCommentsAddCommentMutationVariables,
  response: RecipeDetailCommentsAddCommentMutationResponse,
|};
*/


/*
mutation RecipeDetailCommentsAddCommentMutation(
  $input: AddCommentMutationInput!
) {
  addComment(input: $input) {
    comment {
      id
      rating
      text
      user {
        id
        avatarUrl
        nick
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
    "type": "AddCommentMutationInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddCommentMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatarUrl",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "nick",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
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
    "name": "RecipeDetailCommentsAddCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeDetailCommentsAddCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RecipeDetailCommentsAddCommentMutation",
    "id": null,
    "text": "mutation RecipeDetailCommentsAddCommentMutation(\n  $input: AddCommentMutationInput!\n) {\n  addComment(input: $input) {\n    comment {\n      id\n      rating\n      text\n      user {\n        id\n        avatarUrl\n        nick\n      }\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be4c9cb3c6d961e945f1e040f01d9f3b';
module.exports = node;
