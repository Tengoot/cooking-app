import React from 'react'
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import seeds from '../assets/seed';
import RecipeIngredientListForm from './recipeIngredientListForm'

class RecipeEditForm extends React.Component {
  constructor(props) {
    super(props);
    const recipe = this.findOrInitializeRecipe();

    this.state = {
      recipe: recipe,
      title: {
        name: 'title',
        value: recipe.title,
        valid: true,
        maxSize: 256,
      },
      timeToPrepare: {
        name: 'timeToPrepare',
        value: recipe.timeToPrepare,
        valid: true,
        maxSize: 256,
      },
      shortDescription: {
        name: 'shortDescription',
        value: recipe.shortDescription,
        valid: true,
        maxSize: 512,
      },
      description: {
        name: 'description',
        value: recipe.description,
        valid: true,
        maxSize: 16384,
      },
      peopleCount: {
        name: 'peopleCount',
        value: recipe.peopleCount || 2,
        valid: true,
        maxValue: 99,
      },
      image: {
        name: 'image',
        value: '',
        valid: true,
        previewUrl: recipe.imageUrl,
      },
      validation: {
        valid: true,
        message: '',
      },
      formSubmitted: false,
    }
  }

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formSubmitted: true })

    const validationState = { valid: true, message: '' };

    this.validateRequiredFields(validationState);
    this.validatePositiveNumbers(validationState);
    this.validateValueLimits(validationState);
    this.validateSizeLimits(validationState);
    this.validateImageExtension(validationState);
    this.setState({ validation: validationState })
  }

  validateRequiredFields = (validationState) => {
    [this.state.title, this.state.timeToPrepare, this.state.description].forEach((fieldState) => {
      const value = fieldState.value;
      const newState = fieldState;
      const validation = (value || value === '') && (value.length > 0);

      newState.valid = validation;
      
      if (!validation && !validationState.message) {
        validationState.valid = false;
        validationState.message = 'Złe wartości pól';
      }

      this.setState({ [fieldState.name]: newState });
    });
  };

  validatePositiveNumbers = (validationState) => {
    const newState = this.state.peopleCount;
    const value = newState.value;
    const validation = value && value > 0;

    newState.valid = validation;

    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Wartości powinny być większe od 0';
    }

    this.setState({ peopleCount: newState });
  }

  validateValueLimits = (validationState) => {
    const newState = this.state.peopleCount;
    const value = newState.value;
    const validation = value && value <= newState.maxValue;

    newState.valid = validation;

    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = `Wartości powinny być mniejsze niż ${newState.maxValue}`;
    }

    this.setState({ peopleCount: newState });
  }

  validateSizeLimits = (validationState) => {
    [this.state.title, this.state.timeToPrepare, this.state.shortDescription, this.state.description].forEach((fieldState) => {
      const value = fieldState.value;
      if (fieldState.valid === true) {
        const newState = fieldState;
        const validation = (value || value === '') && (value.length <= fieldState.maxSize);
        newState.valid = validation;
        if (!validation && !validationState.message) {
          validationState.valid = false;
          validationState.message = 'Za długie teksty';
        }
        this.setState({ [fieldState.name]: newState });
      }
    })
  }

  validateImageExtension = (validationState) => {
    const newState = this.state.image;
    const value = newState.value;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const validation = value && allowedExtensions.test(value);

    newState.valid = validation;

    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Załadowano zły format pliku';
    }

    this.setState({ image: newState });
  }

  handleChange = (event) => {
    const node = event.target;
    const newState = this.state[node.name]
    
    newState.value = node.value
    this.setState({ [node.name]: newState })
  }

  handleImageChange = (event) => {
    const node = event.target;
    const newState = this.state[node.name]

    if (!node.files || !node.files || node.files.length === 0) return;

    let reader = new FileReader();
    reader.onloadend = () => {
      newState.value = node.files[0].name;
      newState.previewUrl = reader.result;
      this.setState({
        [node.name]: newState
      });
    }
    reader.readAsDataURL(node.files[0]);
  }

  formComponents = () => {
    const recipe = this.state.recipe;
    
    return(
      <form className="Recipe-container" onSubmit={this.handleSubmit}>
        <div></div>
        <div className="Recipe-body">
          <div className={this.state.image.valid ? 'Recipe-image' : 'Recipe-image Input-invalid'}>
            <img src={this.state.image.previewUrl || "https://picsum.photos/600/400?blur"} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}}/>
            <div className="Auth-button">
              <input type="file" id="image-input" name="image" className="hidden" onChange={this.handleImageChange}/>
              <button type="button"><label for="image-input">Wgraj zdjęcie</label></button>
            </div>
          </div>
          <div className='Recipe-content Form-edit'>
            <input
              id="titleInput"
              type="text"
              name="title"
              className={this.state.title.valid ? 'Recipe-title' : 'Recipe-title Input-invalid'}
              defaultValue={recipe.title}
              placeholder="Tytuł"
              onChange={this.handleChange}
            />
            <div className='Recipe-title-thumb'>
              <span>Dodano: {recipe.createdAt}</span>
              <span>
                Czas przygotowania: <input
                  id="timeToPrepareInput"
                  type="text"
                  name="timeToPrepare"
                  className={this.state.timeToPrepare.valid ? '' : 'Input-invalid'}
                  defaultValue={recipe.timeToPrepare} 
                  placeholder="Czas przygotowania"
                  onChange={this.handleChange}
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
                name="shortDescription"
                className={this.state.shortDescription.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
                defaultValue={recipe.shortDescription}
                placeholder="Krótki opis"
                onChange={this.handleChange}
              />
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-ingredients-title'>
              <span>Składniki dla <input id="peopleCountInput" name="peopleCount" className={this.state.peopleCount.valid ? 'Input-number' : 'Input-number Input-invalid'} type="number" defaultValue={recipe.peopleCount} onChange={this.handleChange}/> osób:</span>
            </div>
            <RecipeIngredientListForm recipeIngredients={seeds.recipeIngredients} />
            <div className='Recipe-break' />
            <div className='Recipe-label'>Przygotowanie</div>
            <div className='Recipe-description'>
              <textarea
                name="description"
                defaultValue={recipe.description}
                className={this.state.description.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
                placeholder="Opis"
                onChange={this.handleChange}
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
        <div className='Recipe-management-content'>
          <span className="Form-message-invalid">{this.state.validation.message}</span>
            <div className='Recipe-management-buttons'>
              <div id="sign-in-button" className="Auth-button">
                <button><span>Zapisz</span></button>
              </div>
              <Link className="Anchor-unstyled" to={`/recipes/${recipe.id || ''}`}>
                <div id="sign-in-button" className="Auth-button">
                  <button><span>Anuluj</span></button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }

  redirect = () => {
    return(<Redirect to={`/recipes/${this.state.recipe.id || ''}`} />);
  }

  render() {
    return this.state.formSubmitted && this.state.validation.valid ? this.redirect() : this.formComponents();
  }
}

export default withRouter(RecipeEditForm);