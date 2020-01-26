/**
 * @flow
 * @relayHash db5f40ef3ecc4fbb40f02720a2f50fb5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListRootListShoppingListsQueryVariables = {|
  count: number,
  archived: boolean,
|};
export type ShoppingListRootListShoppingListsQueryResponse = {|
  +shoppingLists: {|
    +pageInfo: {|
      +hasNextPage: boolean
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +archived: boolean,
        +percentDone: ?number,
        +createdAt: string,
        +recipe: {|
          +id: string,
          +title: string,
          +imageUrl: ?string,
        |},
      |}
    |}>,
  |}
|};
export type ShoppingListRootListShoppingListsQuery = {|
  variables: ShoppingListRootListShoppingListsQueryVariables,
  response: ShoppingListRootListShoppingListsQueryResponse,
|};
*/


/*
query ShoppingListRootListShoppingListsQuery(
  $count: Int!
  $archived: Boolean!
) {
  shoppingLists(first: $count, archived: $archived) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        archived
        percentDone
        createdAt
        recipe {
          id
          title
          imageUrl
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "archived",
    "type": "Boolean!",
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
    "name": "shoppingLists",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "archived",
        "variableName": "archived"
      },
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "count"
      }
    ],
    "concreteType": "ShoppingListConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "ShoppingListEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingList",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "archived",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "percentDone",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "createdAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "recipe",
                "storageKey": null,
                "args": null,
                "concreteType": "Recipe",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "imageUrl",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
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
    "name": "ShoppingListRootListShoppingListsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListRootListShoppingListsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ShoppingListRootListShoppingListsQuery",
    "id": null,
    "text": "query ShoppingListRootListShoppingListsQuery(\n  $count: Int!\n  $archived: Boolean!\n) {\n  shoppingLists(first: $count, archived: $archived) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        archived\n        percentDone\n        createdAt\n        recipe {\n          id\n          title\n          imageUrl\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1444ee4bf92e438d1d4144ebc9f1ead4';
module.exports = node;
