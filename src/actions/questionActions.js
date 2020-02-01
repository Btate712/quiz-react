export function getQuestion(url, questionId, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_QUESTION' });
    const configurationObject = {
      headers: {
        "Authorization": token
      }
    }
    fetch(`${url}/questions/${questionId}`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_QUESTION', question: json.body })
      });
  }
}

export function getQuestions(url, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_QUESTIONS' });
    const configurationObject = {
      headers: {
        "Authorization": token
      }
    }
    fetch(`${url}/questions`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_QUESTIONS', questions: json.body })
      });
  }
}