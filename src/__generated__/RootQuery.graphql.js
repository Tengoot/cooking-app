/**
 * @flow
 * @relayHash a37e9008025dbebca4c5c91c5d3bda73
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RootQueryVariables = {||};
export type RootQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +nick: string,
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
    "text": "query RootQuery {\n  viewer {\n    id\n    nick\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8404974ce3feb958182f1c53708804b2';
module.exports = node;
