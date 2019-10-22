import React from 'react';
import seeds from '../assets/seed'
import RecipeThumb from './recipeThumb'

class RecipeList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        recipes: [],
    };
  }

  componentDidMount() {
    this.setState({ recipes: seeds });
  }

  render() {
    const recipeThumbsComponents = this.state.recipes.map((recipe) => (
      <RecipeThumb
        key={'recipe_thumb-' + recipe.id}
        id={recipe.id}
        imageUrl={recipe.imageUrl}
        title={recipe.title}
        author={recipe.author}
      />
    ));

    return(
      <div className='RecipeThumb-List'>
        {recipeThumbsComponents}
      </div>
    );
  }
}

export default RecipeList;