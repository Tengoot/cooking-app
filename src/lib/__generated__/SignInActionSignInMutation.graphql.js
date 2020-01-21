/**
 * @flow
 * @relayHash d1ffa2948bc91dee23488416559d40ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRoleEnum = "ADMIN" | "MODERATOR" | "USER" | "%future added value";
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
      +avatarUrl: ?string,
      +role: UserRoleEnum,
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
      avatarUrl
      role
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
            "name": "avatarUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "role",
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
    "text": "mutation SignInActionSignInMutation(\n  $input: SignInMutationInput!\n) {\n  signIn(input: $input) {\n    user {\n      id\n      nick\n      avatarUrl\n      role\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ceec9121233a681f736444e6a80c8e91';
module.exports = node;
