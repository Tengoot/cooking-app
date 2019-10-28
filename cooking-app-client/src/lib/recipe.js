import React from 'react';
import { withRouter } from 'react-router';
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

  render() {
    if (this.state.recipe) {
      return(
        <div className='Recipe-container'>
          <div className='Recipe-comments'>Column for comments</div>
          <div className='Recipe-body'>
            <img src={this.state.recipe.imageUrl} className='Recipe-image' />
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
                {/* <ul>
                  <li>około 125-150 ml pesto bazyliowego</li>
                  <li>400 g makaronu pszennego lub bezglutenowego</li>
                  <li>tarty parmezan lub wegański parmezan</li>
                  <li>listy bazylii do ozdoby</li>
                </ul> */}
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