import React from 'react';
import seeds from '../assets/seed';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withValidators } from '../HOC/withValidators';
import { Link, Redirect } from 'react-router-dom';


class IngredientEditForm extends React.Component {
  constructor(props) {
    super(props);
    const ingredient = this.findIngredient();

    this.state = {
      ingredient: ingredient,
      name: {
        name: 'name',
        value: ingredient.name,
        valid: true,
        maxSize: 256,
        validators: [this.props.validateRequiredFields, this.props.validateSizeLimits],
      },
      averagePrice: {
        name: 'averagePrice',
        value: ingredient.averagePrice,
        valid: true,
        maxValue: 1000000000,
        validators: [this.props.validatePositiveNumbers, this.props.validateValueLimits],
      },
      kcal: {
        name: 'kcal',
        value: ingredient.kcal,
        valid: true,
        maxValue: 1000000000,
        validators: [this.props.validatePositiveNumbers, this.props.validateValueLimits],
      },
      description: {
        name: 'description',
        value: ingredient.description,
        valid: true,
        maxSize: 16384,
        validators: [this.props.validateRequiredFields, this.props.validateSizeLimits],
      },
      image: {
        name: 'image',
        value: '',
        valid: true,
        previewUrl: ingredient.imageUrl,
        validators: [this.props.validateImageExtension]
      },
      validation: {
        valid: true,
        message: '',
      },
      formSubmitted: false,
    }
  }

  findIngredient = () => {
    const ingredient = seeds.ingredients.find((element) => {
      return element.id.toString() === this.props.match.params.id;
    });
    return ingredient;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formSubmitted: true })

    const validationState = { valid: true, message: '' };

    this.runValidations(validationState);
    this.setState({ validation: validationState })
  }

  runValidations = (validationState) => {
    const fieldsToValidate = ['name', 'averagePrice', 'kcal', 'description', 'image'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldState = this.state[fieldName];
      let valid = true;
      fieldState.validators.forEach((validator) => {
        if (valid) {
          const newState = validator(validationState, fieldState);
          if (!newState.valid) {
            valid = false;
            this.setState({ [fieldState.name]: newState })
          }
        }
      });
    })
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

  redirect = () => {
    return(<Redirect to={`/ingredients/${this.state.ingredient.id || ''}`} />);
  }

  formComponents = () => {
    const ingredient = this.state.ingredient;

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
              name="name"
              type="text"
              className={this.state.name.valid ? 'Recipe-title' : 'Recipe-title Input-invalid'}
              defaultValue={ingredient.name}
              placeholder="Tytuł"
              onChange={this.handleChange}
            />
            <div className='Recipe-break' />
            <div className='Recipe-description-short'>
              <p>
                <strong>Średnia cena:</strong>
                <input
                  name="averagePrice"
                  className={this.state.averagePrice.valid ? 'Input-number' : 'Input-number Input-invalid'}
                  type="number"
                  defaultValue={ingredient.averagePrice}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <strong>kcal:</strong>
                <input
                  name="kcal"
                  className={this.state.kcal.valid ? 'Input-number' : 'Input-number Input-invalid'}
                  type="number"
                  defaultValue={ingredient.kcal}
                  onChange={this.handleChange}
                />
              </p>
            </div>
            <div className='Recipe-break' />
            <div className='Recipe-description'>
              <textarea
                name="description"
                className={this.state.description.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
                defaultValue={ingredient.description}
                placeholder="Opis"
                onChange={this.handleChange}
              />
            </div>
            <div className='Recipe-break' />
          </div>
        </div>
        <div className='Recipe-management'>
          <div className='Recipe-management-content'>
            <span className="Form-message-invalid">{this.state.validation.message}</span>
            <div className='Recipe-management-buttons'>
              <div className="Auth-button">
                <button><span>Zapisz</span></button>
              </div>
              <Link className="Anchor-unstyled" to={`/ingredients/${ingredient.id}`}>
                <div className="Auth-button">
                  <button><span>Anuluj</span></button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    )
  }

  render() {
    return this.state.formSubmitted && this.state.validation.valid ? this.redirect() : this.formComponents();
  }
};

export default compose(withRouter, withValidators)(IngredientEditForm);