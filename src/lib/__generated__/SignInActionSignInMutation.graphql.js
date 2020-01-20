/**
 * @flow
 * @relayHash dc1ac010002746267eacaaed0e14591e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInMutationInput = {|
  clientMutationId?: ?string,
  nick: string,
  password: string,
|};
export type SignInActionSignInMutationVariables = {|
  input: SignInMutationInput
|};
export type SignInActionSignInMutationResponse = {|
  +signIn: ?{|
    +user: {|
      +id: string,
      +nick: string,
      +avatarDataUri: ?string,
    |}
  |}
|};
export type SignInActionSignInMutation = {|
  variables: SignInActionSignInMutationVariables,
  response: SignInActionSignInMutationResponse,
|};
*/


/*
mutation SignInActionSignInMutation(
  $input: SignInMutationInput!
) {
  signIn(input: $input) {
    user {
      id
      nick
      avatarDataUri
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signIn",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignInMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "avatarDataUri",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignInActionSignInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignInActionSignInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignInActionSignInMutation",
    "id": null,
    "text": "mutation SignInActionSignInMutation(\n  $input: SignInMutationInput!\n) {\n  signIn(input: $input) {\n    user {\n      id\n      nick\n      avatarDataUri\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4e64c9ea407caef53408b7780f37c95';
module.exports = node;
