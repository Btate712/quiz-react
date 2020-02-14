import React from 'react';

const Comment = props => {
  const dateCreated = new Date(props.comment.created_at);

  return(
    <>
      {console.log(props)}
      {props.comment.comment_type === "explanation" ? <h2>Explanation:</h2> : <h2>Comment:</h2>}
      <h3 dangerouslySetInnerHTML={ {__html: props.comment.text} } ></h3>
      <h3>By User: {props.user.name}</h3>
      <h4>{`${dateCreated.getMonth() + 1}/${dateCreated.getDate()}/${dateCreated.getFullYear()}`}</h4>
      <hr />
    </>
  )
}

export default Comment