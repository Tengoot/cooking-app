/**
 * @flow
 * @relayHash 5821b097b63ed0b53753d05d0a434ef7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpMutationInput = {|
  clientMutationId?: ?string,
  email: string,
  nick: string,
  password: string,
|};
export type SignUpActionSignUpMutationVariables = {|
  input: SignUpMutationInput
|};
export type SignUpActionSignUpMutationResponse = {|
  +signUp: ?{|
    +user: ?{|
      +id: string,
      +nick: string,
      +avatarUrl: ?string,
    |}
  |}
|};
export type SignUpActionSignUpMutation = {|
  variables: SignUpActionSignUpMutationVariables,
  response: SignUpActionSignUpMutationResponse,
|};
*/


/*
mutation SignUpActionSignUpMutation(
  $input: SignUpMutationInput!
) {
  signUp(input: $input) {
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
    "type": "SignUpMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signUp",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignUpMutationPayload",
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
    "name": "SignUpActionSignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpActionSignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpActionSignUpMutation",
    "id": null,
    "text": "mutation SignUpActionSignUpMutation(\n  $input: SignUpMutationInput!\n) {\n  signUp(input: $input) {\n    user {\n      id\n      nick\n      avatarUrl\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8bc49f565dcf9e9160ae668c467643e';
module.exports = node;
