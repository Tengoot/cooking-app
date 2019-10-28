import React from 'react';
import seeds from '../assets/seed'
import { withRouter } from 'react-router';

class Ingredient extends React.Component {
  findIngredient = () => {
    const ingredient = seeds.ingredients.find((element) => {
      return element.id.toString() === this.props.match.params.id;
    });
    return ingredient;
  }
  render() {
    const ingredient = this.findIngredient();
    return(
      <div className="Recipe-container">
        <div></div>
        <div className='Recipe-body'>
          <img src={ingredient.imageUrl} className='Recipe-image' />
          <div className='Recipe-content'>
            <span className='Recipe-title'>{ingredient.name}</span>
            <div className='Recipe-break' />
            <div className='Recipe-description-short'>
              <p><strong>Średnia cena:</strong> {ingredient.averagePrice}</p>
              <p><strong>kcal:</strong> {ingredient.kcal}</p>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-description'>
              <p>{ingredient.description}</p>
            </div>
            <div className='Recipe-break' />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Ingredient);