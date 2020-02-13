import React from 'react';

const Comment = props => {
  return(
    <>
      <h3>{props.comment.text}</h3>
      <h3>By User: {props.user.name}</h3>
      <hr />
    </>
  )
}

export default Comment