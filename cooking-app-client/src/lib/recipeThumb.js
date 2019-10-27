import React from 'react';
import { Link } from 'react-router-dom';

class RecipeThumb extends React.Component {
  render() {
    return(
      <Link className='Anchor-unstyled' to={`/recipes/${this.props.id}`}>
        <div className='App-recipe-thumb'>
          <img src={this.props.imageUrl} className='RecipeThumb-image' />
          <div className='RecipeThumb-content'>
            <div className='RecipeThumb-title'>
              <span>{this.props.title}</span>
            </div>
            <div className='RecipeThumb-author'>
            <span>{this.props.author}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default RecipeThumb;