import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import UseMutation from '../UseMutation';
import SuspenseImage from '../SuspenseImage';
import RecipeManagementActions from './RecipeManagementActions'
import RecipeIngredients from './RecipeIngredients'
import RoutingContext from '../routing/RoutingContext';
import { validatePositiveNumbers, validateValueLimits, validateRequiredFields } from '../Validators';

const { useCallback, useState, useContext } = React;

const AddShoppingListMutation = graphql`
  mutation RecipeDetailRootAddShoppingListMutation($input: AddShoppingListMutationInput!) {
    addShoppingList(input: $input) {
      shoppingList {
        id
        archived
        peopleCount
        note
        shoppingListItems {
          id
          ticked
          recipeIngredient {
            ingredient {
              name
            }
          }
        }
      }
      errors
    }
  }
`;

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <React.Fragment>
      {toggle(show)}
      {isShown && content(hide)}
    </React.Fragment>
  );
}

const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  )
);

export default function RecipeDetailRoot(props) {
  const { node: recipe } = usePreloadedQuery(
    graphql`
      query RecipeDetailRootQuery($id: ID!) {
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
    props.prepared.RecipeDetailQuery,
  )

  if (recipe === null) {
    return(<div className='NotFoundLabel'>Recipe Not Found!</div>);
  }

  const [isAddShoppingListPending, addShoppingList] = UseMutation(AddShoppingListMutation);

  const router = useContext(RoutingContext);

  const [peopleCount, setPeopleCount] = useState(
    { name: 'peopleCount', value: 2, valid: true, maxValue: 1000000000,
      validators: [validateRequiredFields, validatePositiveNumbers, validateValueLimits] }
  );
  const [validation, setValidation] = useState({ valid: true, message: '' })

  const runValidations = (validationState) => {
    const fieldsToValidate = ['peopleCount'];
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

  const onPeopleCountChange = useCallback(
    event => {
      const newState = peopleCount;
      newState.value = event.target.value;
      setPeopleCount(newState);
    },
    [setPeopleCount],
  );

  const onNewShoppingList = useCallback(
    event => {
      event.preventDefault();
      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      if(validationState.valid) {
        addShoppingList({
          variables: {
            input: {
              recipeId: recipe.id,
              peopleCount: parseInt(peopleCount.value),
            },
          },
          updater: (store, response) => {
            if (response.addShoppingList.shoppingList) {
              router.history.push('/shopping-lists/' + response.addShoppingList.shoppingList.id);
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
    [peopleCount]
  )

  const newShoppingListForm = (hide) => (
    <form onSubmit={onNewShoppingList}>
      <p>Dla ilu osób?</p>
      <input
        name="peopleCount"
        type="number"
        className={peopleCount.valid ? 'Input-number' : 'Input-number Input-invalid'}
        defaultValue={peopleCount}
        onChange={onPeopleCountChange}
      />
      <span className="Form-message-invalid">{validation.message}</span>
      <p />
      <div className="Auth-button-smol">
        <button>Stwórz</button>
        <button onClick={(e) => { e.preventDefault(); hide() }}>Zamknij</button>
      </div>
    </form>
  );

  const createShoppingListInput = () => {
    if(localStorage.getItem('signedIn')) {
      return(
        <ToggleContent
          toggle={show => <div className="Auth-button-wide"><button onClick={show}>Stwórz listę zakupów</button></div>}
          content={hide => (
            <Modal>
              {newShoppingListForm(hide)}
            </Modal>
          )}
        />
      );
    }
  }

  return (
    <div className='Recipe-container'>
      <div className='Recipe-comments'>Column for comments</div>
      <div className='Recipe-body'>
        <div className="Recipe-image">
        <SuspenseImage
          src={recipe.imageUrl ? 'http://localhost:3000/' + recipe.imageUrl : 'https://via.placeholder.com/500'}
        />
        </div>
        <div className='Recipe-content'>
          <span className='Recipe-title'>{recipe.title}</span>
          <div className='Recipe-title-thumb'>
            <span>Dodano: {recipe.createdAt}</span>
            <span>Czas przygotowania: {recipe.timeToPrepare}</span>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-author-small'>
            <SuspenseImage src={recipe.user.avatarUrl ? "http://localhost:3000" + recipe.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
            <span><strong>{recipe.user.nick}</strong></span>
          </div>
          <div id="modal-root"></div>
          {createShoppingListInput()}
          <div className='Recipe-description-short'>
            <p>{recipe.shortDescription}</p>
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-ingredients-title'>
            { recipe.peopleCount ? 'Składniki dla ' + recipe.peopleCount + ' osób' : 'Składniki' }
          </div>
          <div>
            <RecipeIngredients recipeIngredients={recipe.recipeIngredients} />
          </div>
          <div className='Recipe-break' />
          <div className='Recipe-label'>Przygotowanie</div>
          <div className='Recipe-description'>
            <p>{recipe.description}</p>
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
          {RecipeManagementActions(recipe)}
        </div>
      </div>
    </div>
  );
}