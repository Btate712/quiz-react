export function getComments(url, questionId, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_COMMENTS' });
    const configurationObject = {
      headers: {
        authorization: token
      }
    }
    fetch(`${url}/questions/${questionId}/comments`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_COMMENTS', comments: json.body })
      });
  }
}

export function createComment(url, comment, token) {
  return dispatch => {
  const configurationObject = {
    method: "POST",
    mode: "cors",
    headers: { 
      "Content-type": "application/json",
      "Accept": "application/json",
      authorization: token
    },
    body: JSON.stringify({
      question_id: comment.questionId,
      user_name: comment.userName,
      text: comment.text,
      resolved: comment.resolved,
      comment_type: comment.commentType
    })
  }
  fetch(`${url}/questions/${comment.questionId}/comments`, configurationObject)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: 'ADD_COMMENT_TO_QUESTION', comment: json.body })
      alert(json.message);
    })
  }
}

export function deleteComment(url, commentId, token) {
  return dispatch => {
  const configurationObject = {
    method: "DELETE",
    mode: "cors",
    headers: { 
      "Content-type": "application/json",
      "Accept": "application/json",
      authorization: token
    }
  }
  fetch(`${url}/comments/${commentId}`, configurationObject)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch({ type: 'DELETE_COMMENT_FROM_QUESTION', commentId: commentId })
      alert(json.message)
      })
  }
}