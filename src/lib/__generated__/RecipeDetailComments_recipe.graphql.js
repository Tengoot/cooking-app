/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RecipeDetailComments_recipe$ref: FragmentReference;
declare export opaque type RecipeDetailComments_recipe$fragmentType: RecipeDetailComments_recipe$ref;
export type RecipeDetailComments_recipe = {|
  +comments: $ReadOnlyArray<{|
    +id: string,
    +rating: ?number,
    +text: ?string,
    +user: {|
      +id: string,
      +avatarUrl: ?string,
      +nick: string,
    |},
  |}>,
  +$refType: RecipeDetailComments_recipe$ref,
|};
export type RecipeDetailComments_recipe$data = RecipeDetailComments_recipe;
export type RecipeDetailComments_recipe$key = {
  +$data?: RecipeDetailComments_recipe$data,
  +$fragmentRefs: RecipeDetailComments_recipe$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "RecipeDetailComments_recipe",
  "type": "Recipe",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "comments",
      "storageKey": null,
      "args": null,
      "concreteType": "Comment",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
            (v0/*: any*/),
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0f7b62be0be2d9874d2682b499d74e66';
module.exports = node;
