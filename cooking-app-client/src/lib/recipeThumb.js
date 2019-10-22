import React from 'react';

class RecipeThumb extends React.Component {
  render() {
    return(
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
    );
  }
}

export default RecipeThumb;