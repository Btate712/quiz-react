import React from 'react';
import SanitizedHTML from 'react-sanitized-html'

const Comment = props => {
  const dateCreated = new Date(props.comment.created_at);

  const show = () => {
    if(props.comment.comment_type === "stop-asking") {
      if(props.user.name === props.commentUser.name) {
        return (
        <>
          <h3>Don't Ask</h3>
          <button className="btn btn-danger" onClick={() => props.deleteComment(props.comment.id)}>Delete Comment</button>
          <hr />
        </>
        )
      } else {
        return (<></>)
      }
    }
    else {
      return(
        <>
          {props.comment.comment_type === "explanation" ? <h2>Explanation:</h2> : <h2>Comment:</h2>}
          <h3><SanitizedHTML html={props.comment.text} /></h3>
          <h3>By User: {props.user.name}</h3>
          <h4>{`${dateCreated.getMonth() + 1}/${dateCreated.getDate()}/${dateCreated.getFullYear()}`}</h4>
          <hr />
        </>
      )
    }
  }

  return show()
  
}

export default Comment