import React from 'react';
import seeds from '../assets/seed'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Ingredient extends React.Component {
  findIngredient = () => {
    const ingredient = seeds.ingredients.find((element) => {
      return element.id.toString() === this.props.match.params.id;
    });
    return ingredient;
  }
  
  state = {
    ingredient: this.findIngredient(),
  }

  managementButtons = () => {
    if (localStorage.getItem('signedIn')) {
      return (
      <div className='Recipe-management-buttons'>
        <Link className="Anchor-unstyled" to={`/ingredients/${this.state.ingredient.id}/edit`}>
          <div id="edit-button" className="Auth-button">
            <button><span>Edytuj</span></button>
          </div>
        </Link>
      </div>
      )
    }
  }

  render() {
    const ingredient = this.state.ingredient;
    return(
      <div className="Recipe-container">
        <div></div>
        <div className='Recipe-body'>
          <div className="Recipe-image">
            <img src={ingredient.imageUrl} />
          </div>
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
        <div className='Recipe-management'>
          <div className='Recipe-management-content'>
            {this.managementButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Ingredient);