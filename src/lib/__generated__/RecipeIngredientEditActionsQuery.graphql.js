/**
 * @flow
 * @relayHash a9ecd8d05b0b2b204b2cbf7f2df371bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipeIngredientEditActionsQueryVariables = {|
  name: string
|};
export type RecipeIngredientEditActionsQueryResponse = {|
  +ingredientSearch: $ReadOnlyArray<{|
    +id: string,
    +name: string,
  |}>
|};
export type RecipeIngredientEditActionsQuery = {|
  variables: RecipeIngredientEditActionsQueryVariables,
  response: RecipeIngredientEditActionsQueryResponse,
|};
*/


/*
query RecipeIngredientEditActionsQuery(
  $name: String!
) {
  ingredientSearch(name: $name) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ingredientSearch",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Ingredient",
    "plural": true,
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
        "name": "name",
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
    "name": "RecipeIngredientEditActionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RecipeIngredientEditActionsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RecipeIngredientEditActionsQuery",
    "id": null,
    "text": "query RecipeIngredientEditActionsQuery(\n  $name: String!\n) {\n  ingredientSearch(name: $name) {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c6c55424ec628dfbef5d7232ce325d3';
module.exports = node;
