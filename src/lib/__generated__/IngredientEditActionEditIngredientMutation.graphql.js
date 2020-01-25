/**
 * @flow
 * @relayHash 3ca3a2be9acfb51d17b22edb203f6ee8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditIngredientMutationInput = {|
  averagePrice?: ?number,
  clientMutationId?: ?string,
  description?: ?string,
  ingredientId: string,
  kcal?: ?number,
  name?: ?string,
|};
export type IngredientEditActionEditIngredientMutationVariables = {|
  input: EditIngredientMutationInput
|};
export type IngredientEditActionEditIngredientMutationResponse = {|
  +editIngredient: ?{|
    +ingredient: ?{|
      +id: string,
      +name: string,
      +averagePrice: ?number,
      +description: ?string,
      +kcal: ?number,
    |},
    +errors: $ReadOnlyArray<string>,
  |}
|};
export type IngredientEditActionEditIngredientMutation = {|
  variables: IngredientEditActionEditIngredientMutationVariables,
  response: IngredientEditActionEditIngredientMutationResponse,
|};
*/


/*
mutation IngredientEditActionEditIngredientMutation(
  $input: EditIngredientMutationInput!
) {
  editIngredient(input: $input) {
    ingredient {
      id
      name
      averagePrice
      description
      kcal
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
    "type": "EditIngredientMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editIngredient",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "EditIngredientMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ingredient",
        "storageKey": null,
        "args": null,
        "concreteType": "Ingredient",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "averagePrice",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "kcal",
            "args": null,
            "storageKey": null
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
    "name": "IngredientEditActionEditIngredientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "IngredientEditActionEditIngredientMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "IngredientEditActionEditIngredientMutation",
    "id": null,
    "text": "mutation IngredientEditActionEditIngredientMutation(\n  $input: EditIngredientMutationInput!\n) {\n  editIngredient(input: $input) {\n    ingredient {\n      id\n      name\n      averagePrice\n      description\n      kcal\n    }\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75b80d9fac94f1c7219562823762de9a';
module.exports = node;
