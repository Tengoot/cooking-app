import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import Link from '../routing/Link';
import UseMutation from '../UseMutation';
import RoutingContext from '../routing/RoutingContext';
import { toast } from 'react-toastify';
import SuspenseImage from '../SuspenseImage';
import { validateRequiredFields, validateSizeLimits, validatePositiveNumbers, validateValueLimits, validateImageExtension } from '../Validators';

const { useCallback, useState, useContext } = React;

const EditIngredientMutation = graphql`
  mutation IngredientEditActionEditIngredientMutation($input: EditIngredientMutationInput!) {
    editIngredient(input: $input) {
      ingredient {
        id
        name
        averagePrice
        description
        kcal
      }
      errors
    }
  }
`;

export default function IngredientEditAction(props) {
  const { node: ingredient } = usePreloadedQuery(
    graphql`
      query IngredientEditActionQuery($id: ID!) {
        node(id: $id) {
          ... on Ingredient {
            id
            name
            averagePrice
            description
            kcal
            imageUrl
          }
        }
      }
    `,
    props.prepared.IngredientEditQuery,
  )

  if (ingredient === null) {
    return(<div className='NotFoundLabel'>Ingredient Not Found!</div>);
  }

  const [name, setName] = useState(
    { name: 'name', value: ingredient.name, valid: true, maxSize: 256,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [averagePrice, setAveragePrice] = useState(
    { name: 'averagePrice', value: ingredient.averagePrice, valid: true, maxValue: 1000000000,
      validators: [validatePositiveNumbers, validateValueLimits] }
  );

  const [kcal, setKcal] = useState(
    { name: 'kcal', value: ingredient.kcal, valid: true, maxValue: 1000000000,
      validators: [validatePositiveNumbers, validateValueLimits] }
  );

  const [description, setDescription] = useState(
    { name: 'description', value: ingredient.description, valid: true, maxSize: 16384,
      validators: [validateRequiredFields, validateSizeLimits] }
  );

  const [image, setImage] = useState(
    { name: 'image', value: '', previewUrl: ingredient.imageUrl, valid: true,
      dataUri: null, validators: [validateImageExtension] }
  );

  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isEditIngredientPending, editIngredient] = UseMutation(EditIngredientMutation);
  const router = useContext(RoutingContext);

  const onNameChange = useCallback(
    event => {
      const newState = name;
      newState.value = event.target.value;
      setName(newState);
    },
    [setName],
  );

  const onAveragePriceChange = useCallback(
    event => {
      const newState = averagePrice;
      newState.value = event.target.value;
      setAveragePrice(newState);
    },
    [setAveragePrice],
  );

  const onKcalChange = useCallback(
    event => {
      const newState = kcal;
      newState.value = event.target.value;
      setKcal(newState);
    },
    [setKcal],
  );

  const onDescriptionChange = useCallback(
    event => {
      const newState = description;
      newState.value = event.target.value;
      setDescription(newState);
    },
    [setDescription],
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
      }
      newState.dataUri = reader.readAsDataURL(node.files[0]);
      setImage(newState);
    },
    [setImage],
  );

  const runValidations = (validationState) => {
    const fieldsToValidate = ['name', 'averagePrice', 'kcal', 'description'];
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

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setFormSubmitted(true);
      
      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      setValidation(validationState);

      if(validationState.valid) {
        let attributes = {
          ingredientId: ingredient.id,
          name: name.value,
          averagePrice: averagePrice.value,
          kcal: kcal.value,
          description: description.value
        }

        if (image.previewUrl) {
          attributes = { ...attributes, ...{ imageDataUri: image.previewUrl }}
        }

        editIngredient({
          variables: {
            input: attributes,
          },
          updater: (store, response) => {
            const result = store.getRootField('editIngredient');
            if (result) {
              router.history.push('/ingredients/' + ingredient.id);
            } else {
              toast.error('Błędny login lub hasło', {
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
    [name, averagePrice, kcal, description, image]
  );

  return (
    <form className="Recipe-container" onSubmit={onSubmit}>
      <div></div>
      <div className="Recipe-body">
        <div className={image.valid ? 'Recipe-image' : 'Recipe-image Input-invalid'}>
        <SuspenseImage src={'http://localhost:3000' + image.previewUrl || "https://picsum.photos/600/400?blur"} onError={(e)=>{;e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}}/>
            <div className="Auth-button">
              <input type="file" id="image-input" name="image" className="hidden" onChange={onImageChange}/>
              <button type="button"><label for="image-input">Wgraj zdjęcie</label></button>
            </div>
          </div>
        <div className='Recipe-content Form-edit'>
          <input
            name="name"
            type="text"
            className={name.valid ? 'Recipe-title' : 'Recipe-title Input-invalid'}
            defaultValue={ingredient.name}
            placeholder="Nazwa"
            onChange={onNameChange}
          />
          <div className='Recipe-break' />
          <div className='Recipe-description-short'>
            <p>
              <strong>Średnia cena:</strong>
              <input
                name="averagePrice"
                className={averagePrice.valid ? 'Input-number' : 'Input-number Input-invalid'}
                type="number"
                defaultValue={ingredient.averagePrice}
                onChange={onAveragePriceChange}
              />
            </p>
            <p>
              <strong>kcal:</strong>
              <input
                name="kcal"
                className={kcal.valid ? 'Input-number' : 'Input-number Input-invalid'}
                type="number"
                defaultValue={ingredient.kcal}
                onChange={onKcalChange}
              />
            </p>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-description'>
            <textarea
              name="description"
              className={description.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
              defaultValue={ingredient.description}
              placeholder="Opis"
              onChange={onDescriptionChange}
            />
          </div>
          <div className='Recipe-break' />
        </div>
      </div>
      <div className='Recipe-management'>
        <div className='Recipe-management-content'>
          <span className="Form-message-invalid">{validation.message}</span>
          <div className='Recipe-management-buttons'>
            <div className="Auth-button">
              <button><span>Zapisz</span></button>
            </div>
            <Link to={`/ingredients/${ingredient.id}`}>
              <div className="Auth-button">
                <button><span>Anuluj</span></button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}