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

const EditRecipeMutation = graphql`
  mutation RecipeEditActionEditRecipeMutation($input: EditRecipeMutationInput!) {
    editRecipe(input: $input) {
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
  const { node: recipe } = usePreloadedQuery(
    graphql`
      query RecipeEditActionQuery($id: ID!) {
        node(id: $id) {
          ... on Recipe {
            id
            title
            shortDescription
            description
            imageUrl
            peopleCount
            createdAt
            timeToPrepare
            recipeIngredients {
              id
              amount
              unit
              ingredient {
                id
                name
                averagePrice
              }
            }
            averageRating
            user {
              id
              nick
              avatarUrl
            }
          }
        }
      }
    `,
    props.prepared.RecipeEditQuery,
  )

  if (recipe === null) {
    return(<div className='NotFoundLabel'>Recipe Not Found!</div>);
  }

  const [title, setTitle] = useState(
    { name: 'title', value: recipe.title, valid: true, maxSize: 256,
      validators: [validateRequiredFields, validateSizeLimits] }
  );
  
  const [timeToPrepare, setTimeToPrepare] = useState(
    { name: 'timeToPrepare', value: recipe.timeToPrepare, valid: true, maxSize: 256,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [shortDescription, setShortDescription] = useState(
    { name: 'shortDescription', value: recipe.shortDescription, valid: true, maxSize: 512,
      validators: [validateSizeLimits] }
  );

  const [description, setDescription] = useState(
    { name: 'description', value: recipe.description, valid: true, maxSize: 16384,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [peopleCount, setPeopleCount] = useState(
    { name: 'peopleCount', value: recipe.peopleCount || 2, valid: true, maxValue: 99,
      validators: [validatePositiveNumbers, validateValueLimits] }
  );

  const [image, setImage] = useState(
    { name: 'image', value: null, previewUrl: recipe.imageUrl, valid: true,
      validators: [validateImageExtension] }
  );

  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [recipeIngredients, setRecipeIngredients] = useState(recipe.recipeIngredients);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isEditRecipePending, editRecipe] = UseMutation(EditRecipeMutation);
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
        newState.value = reader.result;
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
        ingredientId: element.ingredient.id,
        _destroy: !!element.markedToDestroy
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
          recipeId: recipe.id,
          title: title.value,
          timeToPrepare: timeToPrepare.value,
          shortDescription: shortDescription.value,
          description: description.value,
          peopleCount: peopleCount.value,
          recipeIngredientsAttributes: parseIngredientsInput(recipeIngredients),
        }

        if (image.value) {
          attributes = { ...attributes, ...{ imageDataUri: image.value }}
        }

        editRecipe({
          variables: {
            input: attributes,
          },
          updater: (store, response) => {
            if (response.editRecipe.recipe) {
              router.history.push('/recipes/' + recipe.id);
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
    [title, timeToPrepare, shortDescription, description, recipeIngredients, peopleCount, image]
  );

  return (
    <form className="Recipe-container" onSubmit={onSubmit}>
      <div></div>
      <div className="Recipe-body">
        <div className={image.valid ? 'Recipe-image' : 'Recipe-image Input-invalid'}>
          <SuspenseImage src={recipe.imageUrl ? 'http://localhost:3000' + recipe.imageUrl : 'https://via.placeholder.com/500'} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}}/>
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
            defaultValue={recipe.title}
            placeholder="Tytuł"
            onChange={onTitleChange}
          />
          <div className='Recipe-title-thumb'>
            <span>Dodano: {recipe.createdAt}</span>
            <span>
              Czas przygotowania: <input
                id="timeToPrepareInput"
                type="text"
                name="timeToPrepare"
                className={timeToPrepare.valid ? '' : 'Input-invalid'}
                defaultValue={recipe.timeToPrepare} 
                placeholder="Czas przygotowania"
                onChange={onTimeToPrepareChange}
              />
            </span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-author-small'>
            <SuspenseImage src={recipe.user.avatarUrl ? "http://localhost:3000" + recipe.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
            <span><strong>{recipe.user.nick}</strong></span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-description-short'>
            <textarea
              id="shortDescriptionInput"
              name="shortDescription"
              className={shortDescription.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
              defaultValue={recipe.shortDescription}
              placeholder="Krótki opis"
              onChange={onShortDescriptionChange}
            />
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-ingredients-title'>
            <span>Składniki dla <input id="peopleCountInput" name="peopleCount" className={peopleCount.valid ? 'Input-number' : 'Input-number Input-invalid'} type="number" defaultValue={recipe.peopleCount} onChange={onPeopleCountChange}/> osób:</span>
          </div>
          <RecipeIngredientEditActions
            recipe={recipe}
            recipeIngredients={recipeIngredients}
            setRecipeIngredients={setRecipeIngredients}
          />
          {/* <RecipeIngredientListForm recipeIngredients={seeds.recipeIngredients} /> */}
          <div className='Recipe-break' />
          <div className='Recipe-label'>Przygotowanie</div>
          <div className='Recipe-description'>
            <textarea
              name="description"
              defaultValue={recipe.description}
              className={description.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
              placeholder="Opis"
              onChange={onDescriptionChange}
            />
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-user-space'>
            <div className='Recipe-label'>Przepis opublikowany przez</div>
            <div className='Recipe-break' />
            <SuspenseImage src={recipe.user.avatarUrl ? "http://localhost:3000" + recipe.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-big' />
            <span><strong>{recipe.user.nick}</strong></span>
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
            <Link to={`/recipes/${recipe.id || ''}`}>
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