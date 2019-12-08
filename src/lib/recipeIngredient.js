import React from 'react';
import { Link } from 'react-router-dom';
import seeds from '../assets/seed'

class RecipeIngredient extends React.Component {
  findIngredient = () => {
    const ingredient = seeds.ingredients.find((element) => {
      return element.id.toString() === this.props.ingredientId;
    });
    return ingredient;
  }

  render() {
    const ingredient = this.findIngredient();
    return(
      <li className="RecipeIngredient-item">
        <Link className='Anchor-unstyled' to={`/ingredients/${this.props.id}`}>
          {`${this.props.amount || ''} ${this.props.unit || ''} ${ingredient.name}`.trim()}
        </Link>
      </li>
    );
  }
}

export default RecipeIngredient
