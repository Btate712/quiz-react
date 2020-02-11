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
        console.log(json)
        dispatch({ type: 'ADD_COMMENTS', comments: json.body })
      });
  }
}