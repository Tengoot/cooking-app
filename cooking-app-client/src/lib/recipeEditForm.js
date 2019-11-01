import React from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import seeds from '../assets/seed';
import RecipeIngredientForm from './recipeIngredientForm'

class RecipeEditForm extends React.Component {
  findOrInitializeRecipe = () => {
    const possibleRecipes = seeds.recipes.concat(seeds.additionalRecipes)
    const recipe = possibleRecipes.find((element) => {
      return element.id.toString() === this.props.match.params.id;
    });
    
    return recipe || this.newRecipe();
  }

  newRecipe = () => {
    return ({
      id: null,
      imageUrl: null,
      title: null,
      author: null,
      createdAt: null,
      timeToPrepare: null,
      shortDescription: null,
      description: null,
      peopleCount: null,
      user: {
        imageUrl: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg',
        nick: "Current user",
      }
    });
  }

  render() {
    const recipe = this.findOrInitializeRecipe();
    return(
      <div className="Recipe-container">
        <div></div>
        <div className="Recipe-body">
          <div className="Recipe-image">
            <img src={recipe.imageUrl || "https://picsum.photos/600/400?blur"} />
            <div className="Auth-button">
              <button><span>Wgraj zdjęcie</span></button>
            </div>
          </div>
          <div className='Recipe-content Form-edit'>
            <input
              id="titleInput"
              type="text"
              className='Recipe-title'
              defaultValue={recipe.title}
              placeholder="Tytuł"
            />
            <div className='Recipe-title-thumb'>
              <span>Dodano: {recipe.createdAt}</span>
              <span>
                Czas przygotowania: <input
                  id="timeToPrepareInput"
                  type="text"
                  defaultValue={recipe.timeToPrepare} 
                  placeholder="Czas przygotowania"
                />
              </span>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-author-small'>
              <img src={recipe.user.imageUrl} className='User-image-small' />
              <span><strong>{recipe.user.nick}</strong></span>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-description-short'>
              <textarea
                id="shortDescriptionInput"
                className="Input-textarea"
                defaultValue={recipe.shortDescription}
                placeholder="Krótki opis"
              />
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-ingredients-title'>
              <span>Składniki dla <input id="peopleCountInput" className="Input-number" type="number" defaultValue={recipe.peopleCount}/> osób:</span>
            </div>
            <div>
              <RecipeIngredientForm recipeIngredients={seeds.recipeIngredients} />
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-label'>Przygotowanie</div>
            <div className='Recipe-description'>
              <textarea
                className="Input-textarea"
                defaultValue={recipe.description}
                placeholder="Opis"
              />
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-user-space'>
              <div className='Recipe-label'>Przepis opublikowany przez</div>
              <div className='Recipe-break' />
              <img src={recipe.user.imageUrl} className='User-image-big' />
              <span><strong>{recipe.user.nick}</strong></span>
            </div>
          </div>
        </div>
        <div className='Recipe-management'>
            <div className='Recipe-management-buttons'>
              <Link className="Anchor-unstyled" to={`/recipes/${recipe.id || ''}`}>
                <div id="sign-in-button" className="Auth-button">
                  <button><span>Zapisz</span></button>
                </div>
              </Link>
              <Link className="Anchor-unstyled" to={`/recipes/${recipe.id || ''}`}>
                <div id="sign-in-button" className="Auth-button">
                  <button><span>Anuluj</span></button>
                </div>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(RecipeEditForm);