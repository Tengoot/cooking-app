import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext';
import { toast } from 'react-toastify';
import seeds from '../assets/seed';

const { useCallback, useState, useTransition, Suspense } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

export default function RecipeIngredientEditActions(props) {
  const [searchPhrase, setSearchPhrase] = useState('ingredient');
  const data = useLazyLoadQuery(
    graphql`
      query RecipeIngredientEditActionsQuery($name: String!) {
        ingredientSearch(name: $name) {
          id
          name
        }
      }
    `,
    { name: searchPhrase },
    { fetchPolicy: 'store-or-network' }
  );

  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  const [unit, setUnit] = useState('');
  const [amount, setAmount] = useState(0);
  const [ingredientId, setIngredientId] = useState(null);
  const [ingredientName, setIngredientName] = useState('');

  const ingredientOptions = data.ingredientSearch.map((recipeIngredient) => (
    <option data-value={recipeIngredient.id} value={recipeIngredient.name} />
  ))

  const unitOptions = seeds.units.map((unit) => (
    <option value={unit}/>
  ));

  const onSearchPhraseChange = useCallback(
    event => {
      startTransition(() => {
        setSearchPhrase(event.target.value);
        changeIngredient(event);
      });
    },
    [startTransition, setSearchPhrase],
  );

  const onUnitChange = useCallback(
    event => {
      setUnit(event.target.value);
    },
    [setUnit],
  );

  const onAmountChange = useCallback(
    event => {
      setAmount(event.target.value);
    },
    [setAmount],
  );

  const changeIngredient = useCallback(
    event => {
      const arry = Array.prototype.slice.call(event.target.list.options);
      let resultId = null
      let resultName = null
      const text = event.target.value;

      arry.forEach(element => {
        if (element) {
          const name = element.value
          const id = element.getAttribute('data-value')

          if (id && name === text) {
            resultId = id;
            resultName = name;
          }
        }
      });

      if (resultId && resultName) {
        setIngredientId(resultId);
        setIngredientName(resultName);
      }
    },
    [setIngredientId, setIngredientName]
  );

  const onAdd = useCallback(
    event => {
      event.preventDefault();
      let ri = Object.assign([], props.recipeIngredients);

      ri.push({
        amount: amount,
        unit: unit,
        ingredient: {
          id: ingredientId,
          name: ingredientName,
        },
      });

      props.setRecipeIngredients(ri);
    }
  )

  const markToDestroy = useCallback(
    (event, id) => {
      event.preventDefault();
      let ri = Object.assign([], props.recipeIngredients);

      ri.forEach((e, index) => {
        if(e && e.id === id) {
          if (e.id) {
            ri[index] = {
              id: e.id,
              markedToDestroy: true,
              ingredient: {}
            }
          } else {
            ri.splice(index, 1);
          }
        }
      });
      props.setRecipeIngredients(ri);
    }
  )

  const RecipeIngredients = () => {
    return props.recipeIngredients.filter((e) => { return !e.markedToDestroy }).map((element) => (
      <li key className="RecipeIngredient-item">
        <form>
          <span>{`${element.amount || ''} ${element.unit || ''} ${element.ingredient.name}`.trim()}</span>
          <button onClick={(event) => markToDestroy(event, element.id)} className="text-btn danger">x</button>
        </form>
      </li>
    ))
  }

  return (
    <div className="RecipeIngredient-list-form">
      <form id="AddNewRecipeIngredientForm">
        <label>Dodaj nowy </label>
        <input
          type="text"
          name="ingredient-name"
          list="ingredientname"
          placeholder="Znajdź lub stwórz"
          onChange={(event) => { onSearchPhraseChange(event) }}
        />
        <Suspense>
          <datalist id="ingredientname">
            {ingredientOptions}
          </datalist>
        </Suspense>
        <input type="number" className="Input-wide" name="ingredientcount" placeholder="ilość" onChange={onAmountChange}/>
        <input type="text" className="Input-wider" name="ingredient-unit" list="ingredientunits" placeholder="Jednostka" onChange={onUnitChange}/>
        <datalist id="ingredientunits">
          {unitOptions}
        </datalist>
        <div className="Auth-button-smol">
          <button onClick={onAdd}><span>Dodaj</span></button>
        </div>
      </form>
      <ul className="RecipeIngredient-list">
        {RecipeIngredients()}
      </ul>
    </div>
  );
}