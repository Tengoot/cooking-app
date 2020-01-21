/**
 * @flow
 * @relayHash 923e2130e44e132da72d9b77d97056e8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutMutationInput = {|
  clientMutationId?: ?string
|};
export type SignOutActionSignOutMutationVariables = {|
  input: SignOutMutationInput
|};
export type SignOutActionSignOutMutationResponse = {|
  +signOut: ?{|
    +user: ?{|
      +id: string,
      +nick: string,
      +avatarUrl: ?string,
    |}
  |}
|};
export type SignOutActionSignOutMutation = {|
  variables: SignOutActionSignOutMutationVariables,
  response: SignOutActionSignOutMutationResponse,
|};
*/


/*
mutation SignOutActionSignOutMutation(
  $input: SignOutMutationInput!
) {
  signOut(input: $input) {
    user {
      id
      nick
      avatarUrl
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignOutMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signOut",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignOutMutationPayload",
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
    "name": "SignOutActionSignOutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignOutActionSignOutMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignOutActionSignOutMutation",
    "id": null,
    "text": "mutation SignOutActionSignOutMutation(\n  $input: SignOutMutationInput!\n) {\n  signOut(input: $input) {\n    user {\n      id\n      nick\n      avatarUrl\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59f0bd1a0f74b4724532e20cc0226494';
module.exports = node;
