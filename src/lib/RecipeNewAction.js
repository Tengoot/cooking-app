import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import Link from '../routing/Link';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext';
import { toast } from 'react-toastify';
import RecipeIngredientEditActions from './RecipeIngredientEditActions'
import { validateRequiredFields, validateSizeLimits, validatePositiveNumbers, validateValueLimits, validateImageExtension } from '../Validators';
import SuspenseImage from '../SuspenseImage';

const { useCallback, useState, useContext } = React;

const AddRecipeMutation = graphql`
  mutation RecipeNewActionAddRecipeMutation($input: AddRecipeMutationInput!) {
    addRecipe(input: $input) {
      recipe {
        id
        title
        shortDescription
        description
        imageUrl
        peopleCount
        createdAt
        recipeIngredients {
          id
          amount
          unit
          ingredient {
            id
            name
            averagePrice
            description
            kcal
          }
        }
        averageRating
        user {
          id
          nick
          avatarUrl
        }
      }
      errors
    }
  }
`;

export default function RecipeEditAction(props) {
  const [title, setTitle] = useState(
    { name: 'title', value: '', valid: true, maxSize: 256,
      validators: [validateRequiredFields, validateSizeLimits] }
  );
  
  const [timeToPrepare, setTimeToPrepare] = useState(
    { name: 'timeToPrepare', value: '', valid: true, maxSize: 256,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [shortDescription, setShortDescription] = useState(
    { name: 'shortDescription', value: '', valid: true, maxSize: 512,
      validators: [validateSizeLimits] }
  );

  const [description, setDescription] = useState(
    { name: 'description', value: '', valid: true, maxSize: 16384,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [peopleCount, setPeopleCount] = useState(
    { name: 'peopleCount', value: 2, valid: true, maxValue: 99,
      validators: [validatePositiveNumbers, validateValueLimits] }
  );

  const [image, setImage] = useState(
    { name: 'image', value: null, previewUrl: null, valid: true,
      dataUri: null, validators: [validateImageExtension] }
  );

  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [AddRecipePending, addRecipe] = UseMutation(AddRecipeMutation);
  const router = useContext(RoutingContext);

  const onTitleChange = useCallback(
    event => {
      const newState = title;
      newState.value = event.target.value;
      setTitle(newState);
    },
    [setTitle],
  );

  const onTimeToPrepareChange = useCallback(
    event => {
      const newState = timeToPrepare;
      newState.value = event.target.value;
      setTimeToPrepare(newState);
    },
    [setTimeToPrepare],
  );

  const onShortDescriptionChange = useCallback(
    event => {
      const newState = shortDescription;
      newState.value = event.target.value;
      setShortDescription(newState);
    },
    [setShortDescription],
  );

  const onDescriptionChange = useCallback(
    event => {
      const newState = description;
      newState.value = event.target.value;
      setDescription(newState);
    },
    [setDescription],
  );

  const onPeopleCountChange = useCallback(
    event => {
      const newState = peopleCount;
      newState.value = event.target.value;
      setDescription(newState);
    },
    [setPeopleCount],
  );


  const onImageChange = useCallback(
    event => {
      const node = event.target;
      const newState = image;

      if (!node.files || !node.files || node.files.length === 0) return;

      let reader = new FileReader();
      reader.onloadend = () => {
        newState.value = node.files[0].name;
        newState.previewUrl = reader.result;
        setImage(newState);
      }
      newState.dataUri = reader.readAsDataURL(node.files[0]);
      setImage(newState);
    },
    [setImage],
  );

  const runValidations = (validationState) => {
    const fieldsToValidate = ['title', 'timeToPrepare', 'shortDescription', 'description', 'peopleCount'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldState = eval(fieldName);
      let valid = true;
      fieldState.validators.forEach((validator) => {
        if (valid) {
          const newState = validator(validationState, fieldState);

          if (!newState.valid) {
            valid = false;
            eval('set' + fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + '(newState)');
          }
        }
      });
    });
  };

  const parseIngredientsInput = (ri) => {
    return ri.map((element => {
      return {
        recipeIngredientId: element.id,
        amount: parseInt(element.amount),
        unit: element.unit,
        ingredientId: element.ingredient.id
      }
    }))
  }

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setFormSubmitted(true);
      
      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      setValidation(validationState);

      if(validationState.valid) {
        let attributes = {
          title: title.value,
          timeToPrepare: timeToPrepare.value,
          shortDescription: shortDescription.value,
          description: description.value,
          peopleCount: parseInt(peopleCount.value),
          recipeIngredientsAttributes: parseIngredientsInput(recipeIngredients),
        }

        if (image.previewUrl) {
          attributes = { ...attributes, ...{ imageDataUri: image.previewUrl }}
        }
        
        addRecipe({
          variables: {
            input: attributes,
          },
          updater: (store, response) => {
            console.log(response);
            if (response.addRecipe.recipe) {
              router.history.push('/recipes/' + response.addRecipe.recipe.id);
            } else {
              toast.error(response.errors || 'Coś poszło nie tak', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
              })
            }
          },
        });
      }
    },
    [title, timeToPrepare, shortDescription, description, recipeIngredients, peopleCount]
  );

  return (
    <form className="Recipe-container" onSubmit={onSubmit}>
      <div></div>
      <div className="Recipe-body">
        <div className={image.valid ? 'Recipe-image' : 'Recipe-image Input-invalid'}>
          <SuspenseImage src={image.previewUrl || "https://via.placeholder.com/500"} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}}/>
          <div className="Auth-button">
            <input type="file" id="image-input" name="image" className="hidden" onChange={onImageChange}/>
            <button type="button"><label for="image-input">Wgraj zdjęcie</label></button>
          </div>
        </div>
        <div className='Recipe-content Form-edit'>
          <input
            id="titleInput"
            type="text"
            name="title"
            className={title.valid ? 'Recipe-title' : 'Recipe-title Input-invalid'}
            placeholder="Tytuł"
            onChange={onTitleChange}
          />
          <div className='Recipe-title-thumb'>
            <span>Dodano:</span>
            <span>
              Czas przygotowania: <input
                id="timeToPrepareInput"
                type="text"
                name="timeToPrepare"
                className={timeToPrepare.valid ? '' : 'Input-invalid'}
                placeholder="Czas przygotowania"
                onChange={onTimeToPrepareChange}
              />
            </span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-author-small'>
            <SuspenseImage src={"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
            <span><strong></strong></span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-description-short'>
            <textarea
              id="shortDescriptionInput"
              name="shortDescription"
              className={shortDescription.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
              placeholder="Krótki opis"
              onChange={onShortDescriptionChange}
            />
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-ingredients-title'>
            <span>Składniki dla <input id="peopleCountInput" name="peopleCount" className={peopleCount.valid ? 'Input-number' : 'Input-number Input-invalid'} type="number" onChange={onPeopleCountChange}/> osób:</span>
          </div>
          <RecipeIngredientEditActions
            recipeIngredients={recipeIngredients}
            setRecipeIngredients={setRecipeIngredients}
          />
          <div className='Recipe-break' />
          <div className='Recipe-label'>Przygotowanie</div>
          <div className='Recipe-description'>
            <textarea
              name="description"
              className={description.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
              placeholder="Opis"
              onChange={onDescriptionChange}
            />
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-user-space'>
            <div className='Recipe-label'>Przepis opublikowany przez</div>
            <div className='Recipe-break' />
            <SuspenseImage src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg" className='User-image-big' />
            <span><strong></strong></span>
          </div>
        </div>
      </div>
      <div className='Recipe-management'>
      <div className='Recipe-management-content'>
        <span className="Form-message-invalid">{validation.message}</span>
          <div className='Recipe-management-buttons'>
            <div id="sign-in-button" className="Auth-button">
              <button><span>Zapisz</span></button>
            </div>
            <Link to={`/`}>
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