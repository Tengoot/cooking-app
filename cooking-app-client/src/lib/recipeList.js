import React from 'react';
import seeds from '../assets/seed'
import RecipeThumb from './recipeThumb'
import { Link } from 'react-router-dom';

class RecipeList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        recipes: [],
        paginationAvailable: true,
    };
  }

  componentDidMount() {
    this.setState({ recipes: seeds.recipes });
  }

  addMoreRecipes = () => {
    this.setState({ paginationAvailable: false, recipes: seeds.recipes.concat(seeds.additionalRecipes) })
  }

  newRecipeComponent(recipe) {
    return(
      <RecipeThumb
          key={'recipe_thumb-' + recipe.id}
          id={recipe.id}
          imageUrl={recipe.imageUrl}
          title={recipe.title}
          author={recipe.author}
        />
    );
  }

  generateRecipeComponents(recipes) {
    return recipes.map((recipe) => (
      this.newRecipeComponent(recipe)
    ));
  }

  render() {
    let recipeLength = this.state.recipes.length;
    const recipeComponents = this.generateRecipeComponents(this.state.recipes);

    return(
      <div className='RecipeThumb-List-Container'>
        <Link className="Anchor-unstyled" to="/new">
          <div id="sign-in-button" className="Button-big">
            <button><span>Utwórz przepis</span></button>
          </div>
        </Link>
        <div className='RecipeThumb-List'>
          <div className='RecipeThumb-Column'>
            {recipeComponents.slice(0, (recipeLength/2))}
          </div>
          <div className='RecipeThumb-Column'>
            {recipeComponents.slice((recipeLength/2), recipeLength)}
          </div>
        </div>
        <div className="RecipeThumb-List-pagination-label" onClick={this.addMoreRecipes}>
          <span>{this.state.paginationAvailable && 'Zobacz więcej'}</span>
        </div>
      </div>
    );
  }
}

export default RecipeList;