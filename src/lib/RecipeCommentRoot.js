import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { toast } from 'react-toastify';
import UseMutation from '../UseMutation';
import SuspenseImage from '../SuspenseImage';

const { useCallback } = React;

const DeleteCommentMutation = graphql`
  mutation RecipeCommentRootDeleteCommentMutation($input: DeleteCommentMutationInput!) {
    deleteComment(input: $input) {
      success
      errors
    }
  }
`;

export default function RecipeCommentRoot(props) {
  const { recipe, comment } = props;
  const [isdeleteCommentPending, deleteComment] = UseMutation(DeleteCommentMutation);

  const onCommentDelete = useCallback(
    (event) => {
      event.preventDefault()

      deleteComment({
        variables: {
          input: {
            commentId: comment.id
          }
        },
        updater: (store, response) => {
          if (response && response.deleteComment.success) {
            const recipeRecord = store.get(recipe.id);
            
            if (recipeRecord == null) {
              return;
            }

            const comments = recipeRecord.getLinkedRecords('comments');
            const newComments = comments.filter((commentRecord) => {
              return commentRecord.getDataID() !== comment.id
            })

            recipeRecord.setLinkedRecords(newComments, 'comments');
          } else {
            toast.error('Coś poszło nie tak', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            })
          }
        }
      })
    },
    [],
  )

  const managementHtml = () => {
    const isAuthor = props.user && localStorage.getItem('signedIn') === props.user.id;
    const isAdmin = localStorage.getItem('role') === 'MODERATOR' || localStorage.getItem('role') === 'ADMIN'
    
    if (isAuthor || isAdmin) {
      return (
        <div className='commentManagementButtons'>
          <label onClick={onCommentDelete}>Usuń</label>
        </div>
      )
    }
  }

  return(
    <div className="Recipe-Comment">
      <div className='Recipe-author-small'>
        <SuspenseImage src={comment.user.avatarUrl ? "http://localhost:3000" + comment.user.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
        <span><strong>{comment.user.nick}</strong></span>
      </div>
      <div className="Recipe-Comment-Rating">
        {comment.rating ? `${comment.rating}/5 ⭐️` : null}
      </div>
      <div className="Recipe-Comment-Body">
        <span>{comment.text}</span>
      </div>
      {managementHtml()}
    </div>
  )
}