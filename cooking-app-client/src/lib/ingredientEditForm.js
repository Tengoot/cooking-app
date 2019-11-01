import React from 'react';
import seeds from '../assets/seed';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class IngredientEditForm extends React.Component {
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
        <div className="Recipe-body">
          <div className="Recipe-image">
            <img src={ingredient.imageUrl} />
            <div className="Auth-button">
              <button><span>Wgraj zdjęcie</span></button>
            </div>
          </div>
          <div className='Recipe-content Form-edit'>
            <input
              type="text"
              className='Recipe-title'
              defaultValue={ingredient.name}
              placeholder="Tytuł"
            />
            <div className='Recipe-break' />
            <div className='Recipe-description-short'>
              <p>
                <strong>Średnia cena:</strong>
                <input
                  className="Input-number"
                  type="number"
                  defaultValue={ingredient.averagePrice}
                />
              </p>
              <p>
                <strong>kcal:</strong>
                <input
                  className="Input-number"
                  type="number"
                  defaultValue={ingredient.kcal}
                />
              </p>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-description'>
              <textarea
                className="Input-textarea"
                defaultValue={ingredient.description}
                placeholder="Opis"
              />
            </div>
            <div className='Recipe-break' />
          </div>
        </div>
        <div className='Recipe-management'>
            <div className='Recipe-management-buttons'>
              <Link className="Anchor-unstyled" to={`/ingredients/${ingredient.id}`}>
                <div className="Auth-button">
                  <button><span>Zapisz</span></button>
                </div>
              </Link>
              <Link className="Anchor-unstyled" to={`/ingredients/${ingredient.id}`}>
                <div className="Auth-button">
                  <button><span>Anuluj</span></button>
                </div>
              </Link>
            </div>
          </div>
      </div>
    )
  }
};

export default withRouter(IngredientEditForm);