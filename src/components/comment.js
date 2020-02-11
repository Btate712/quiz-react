import React from 'react';

const Comment = props => {
  return(
    <>
      <h3>{props.comment.text}</h3>
      <h3>By User: {props.comment.user_id}</h3>
      <hr />
    </>
  )
}

export default Comment