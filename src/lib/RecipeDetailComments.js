import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import { toast } from 'react-toastify';
import RecipeCommentRoot from './RecipeCommentRoot';
import UseMutation from '../UseMutation';
import { validateValueLimits, validateSizeLimits } from '../Validators';


const { useCallback, useTransition, useState } = React;

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

const AddCommentMutation = graphql`
  mutation RecipeDetailCommentsAddCommentMutation($input: AddCommentMutationInput!) {
    addComment(input: $input) {
      comment {
        id
        rating
        text
        user {
          id
          avatarUrl
          nick
        }
      }
      errors
    }
  }
`;

export default function RecipeDetailComments(props) {
  const data = useFragment(
    graphql`
      fragment RecipeDetailComments_recipe on Recipe {
        comments {
          id
          rating
          text
          user {
            id
            avatarUrl
            nick
          }
        }
      }
    `,
    props.recipe
  );

  const [rating, setRating] = useState(
    { name: 'rating', value: 0, valid: true, maxValue: 5,
      validators: [validateValueLimits] }
  );

  const [text, setText] = useState(
    { name: 'text', value: '', valid: true, maxSize: 16384,
      validators: [validateSizeLimits] }
  );

  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  const onRatingChange = useCallback(
    event => {
      const newState = rating;
      newState.value = event.target.value;
      setRating(newState);
    },
    [rating, setRating]
  );

  const onTextChange = useCallback(
    event => {
      const newState = text;
      newState.value = event.target.value;
      setText(newState);
    },
    [text, setText]
  );

  const runValidations = (validationState) => {
    const fieldsToValidate = ['rating', 'text'];
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

  const [isAddCommentPending, addComment] = UseMutation(AddCommentMutation);

  const onNewComment = useCallback(
    event => {
      event.preventDefault();

      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      setValidation(validationState);
      
      if(validationState.valid) {
        const attributes = { recipeId: props.recipe.id }
        
        if (parseInt(rating.value) !== 0) {
          attributes.rating = parseInt(rating.value)
        }

        if(text.value) {
          attributes.text = text.value
        }

        addComment({
          variables: {
            input: attributes,
          },
          updater: (store, response) => {
            if (response.addComment.comment) {
              const recipe = store.get(props.recipe.id);
              if (recipe == null) {
                return;
              }
              
              const comments = recipe.getLinkedRecords('comments');
              const newComments = comments.concat(store.getRootField('addComment').getLinkedRecord('comment'))

              recipe.setLinkedRecords(newComments, 'comments');
            } else {
              toast.error('Aby stworzyć komentarz dodaj ocenę albo opis', {
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
    [rating, text]
  )

  const comments = data.comments;

  const commentsComponents = () => {
    return comments.map((comment) => (
      <RecipeCommentRoot
        recipe={props.recipe}
        comment={comment}
      />
    ));
  }

  const viewerCanComment = () => {
    const userIds = comments.map((comment) => {
      return comment.user.id;
    })

    return !(userIds.includes(localStorage.getItem('signedIn')));
  }

  const newCommentForm = () => {
    if (localStorage.getItem('signedIn') && viewerCanComment()) {
      return (
        <div className="Recipe-Comment-New">
          <form onSubmit={onNewComment}>
            <label>Zostaw recenzję</label>
            <div className="Recipe-Comment-New-rating">
              <label>Ocena: </label>
              <input
                name="rating"
                type="number"
                className={text.valid ? 'Input-number' : 'Input-number Input-invalid'}
                onChange={onRatingChange}
              />
              <span>⭐️</span>
            </div>
            <div className="Recipe-Comment-New-text">
              <textarea
                name="description"
                className={text.valid ? 'Input-textarea' : 'Input-textarea Input-invalid'}
                placeholder="Treść"
                onChange={onTextChange}
              />
            </div>
            <span className="Form-message-invalid">{validation.message}</span>
            <div className="Recipe-Comment-New-button Auth-button-wide">
              <button>Dodaj</button>
            </div>
          </form>
        </div>
      )
    }
    return null;;
  }

  return (
    <div className="Recipe-Comments-Container">
      {newCommentForm()}
      {commentsComponents()}
    </div>
  );
}