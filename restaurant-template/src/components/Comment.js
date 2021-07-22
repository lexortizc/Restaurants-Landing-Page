import React from 'react';
import formatDate from '../helpers/formatDate';

const Comment = ({ comment }) => {
  return(
    <>
      <article className="comment">
        <div>
          <span className="commert-user">{ comment.user }</span> el { formatDate(comment.date) }
        </div>
        <p>{ comment.comment }</p>
      </article>
      <hr />
    </>
  )
}

export default Comment;