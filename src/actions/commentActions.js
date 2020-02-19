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
    .then(json => alert(json.message))
}