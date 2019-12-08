import React from 'react'
import RecipeIngredient from './recipeIngredient'
import seeds from '../assets/seed'


class RecipeIngredientListForm extends React.Component {
  render() {
    const components = this.props.recipeIngredients.map((recipeIngredient) => (
      <div className="RecipeIngredient-edit-item">
        <button>x</button>
        <RecipeIngredient
          key={`recipe-ingredient-${recipeIngredient.id}`}
          id={recipeIngredient.id}
          ingredientId={recipeIngredient.ingredientId}
          amount={recipeIngredient.amount}
          unit={recipeIngredient.unit}
        />
      </div>
    ))

    const ingredientOptions = seeds.ingredients.map((ingredient) => (
      <option value={ingredient.name}/>
    ));

    const unitOptions = seeds.units.map((unit) => (
      <option value={unit}/>
    ));

    return (
      <div className="RecipeIngredient-list-form">
        <label>Dodaj nowy </label>
        <input type="text" name="ingredient-name" list="ingredientname" placeholder="Znajdź lub stwórz" />
        <datalist id="ingredientname">
          {ingredientOptions}
        </datalist>
        <input type="number" className="Input-wide" name="ingredientcount" placeholder="ilość"/>
        <input type="text" className="Input-wider" name="ingredient-unit" list="ingredientunits" placeholder="Jednostka" />
        <datalist id="ingredientunits">
          {unitOptions}
        </datalist>
        <ul className="RecipeIngredient-list">
          {components}
        </ul>
      </div>
    );
  }
}

export default RecipeIngredientListForm;