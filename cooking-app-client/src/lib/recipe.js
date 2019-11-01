import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import seeds from '../assets/seed'
import RecipeIngredientList from './recipeIngredientList'

class Recipe extends React.Component {
  state = {
    recipe: null
  }

  componentDidMount() {
    let possibleRecipes = seeds.recipes.concat(seeds.additionalRecipes)
    let recipe = possibleRecipes.find((element) => {
      return element.id.toString() === this.props.match.params.id;
    });
    this.setState({ recipe: recipe });
  };

  managementButtons = () => {
    if (localStorage.getItem("signedIn")) {
      return (
        <div className='Recipe-management-buttons'>
          <Link className="Anchor-unstyled" to={`/recipes/${this.state.recipe.id}/edit`}>
            <div id="sign-in-button" className="Auth-button">
              <button><span>Edytuj</span></button>
            </div>
          </Link>
          <div id="sign-in-button" className="Auth-button">
            <button><span>Usuń</span></button>
          </div>
        </div>
      )
    }
  }

  render() {
    if (this.state.recipe) {
      return(
        <div className='Recipe-container'>
          <div className='Recipe-comments'>Column for comments</div>
          <div className='Recipe-body'>
            <div className="Recipe-image">
              <img src={this.state.recipe.imageUrl} />
            </div>
            <div className='Recipe-content'>
              <span className='Recipe-title'>{this.state.recipe.title}</span>
              <div className='Recipe-title-thumb'>
                <span>Dodano: {this.state.recipe.createdAt}</span>
                <span>Czas przygotowania: {this.state.recipe.timeToPrepare}</span>
              </div>
              <div className='Recipe-break' />
              <div className='Recipe-author-small'>
                <img src={this.state.recipe.user.imageUrl} className='User-image-small' />
                <span><strong>{this.state.recipe.user.nick}</strong></span>
              </div>
              <div className='Recipe-break' />
              <div className='Recipe-description-short'>
                <p>{this.state.recipe.shortDescription}</p>
              </div>
              <div className='Recipe-break' />
              <div className='Recipe-ingredients-title'>
                { this.state.recipe.peopleCount ? 'Składniki dla ' + this.state.recipe.peopleCount + ' osób' : 'Składniki' }
              </div>
              <div>
                <RecipeIngredientList recipeIngredients={seeds.recipeIngredients} />
              </div>
              <div className='Recipe-break' />
              <div className='Recipe-label'>Przygotowanie</div>
              <div className='Recipe-description'>
                <p>{this.state.recipe.description}</p>
              </div>
              <div className='Recipe-break' />
              <div className='Recipe-user-space'>
                <div className='Recipe-label'>Przepis opublikowany przez</div>
                <div className='Recipe-break' />
                <img src={this.state.recipe.user.imageUrl} className='User-image-big' />
                <span><strong>{this.state.recipe.user.nick}</strong></span>
              </div>
            </div>
          </div>
          <div className='Recipe-management'>
            {this.managementButtons()}
          </div>
        </div>
      );
    } else {
      return(
        <div className='NotFoundLabel'>Recipe Not Found!</div>
      );
    }
  }
}

export default withRouter(Recipe);