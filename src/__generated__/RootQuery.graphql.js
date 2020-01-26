/**
 * @flow
 * @relayHash 8dd71fb475cd4948aa239e2487e31f28
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRoleEnum = "ADMIN" | "MODERATOR" | "USER" | "%future added value";
export type RootQueryVariables = {||};
export type RootQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +nick: string,
    +role: UserRoleEnum,
    +avatarUrl: ?string,
  |}
|};
export type RootQuery = {|
  variables: RootQueryVariables,
  response: RootQueryResponse,
|};
*/


/*
query RootQuery {
  viewer {
    id
    nick
    role
    avatarUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
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
        "name": "role",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RootQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RootQuery",
    "id": null,
    "text": "query RootQuery {\n  viewer {\n    id\n    nick\n    role\n    avatarUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e358a49a38375b7b38dc572671ff7b24';
module.exports = node;
