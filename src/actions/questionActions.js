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

export function createQuestion(url, question, token) {
  return dispatch => {
    dispatch({ type: 'CREATING_QUESTION' });
    const configurationObject = {
      method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
          authorization: token
        },
        body: JSON.stringify({
          topic_id: question.topic_id,
          stem: question.stem,
          choice_1: question.choice_1,
          choice_2: question.choice_2,
          choice_3: question.choice_3,
          choice_4: question.choice_4,
          correct_choice: question.correct_choice
        })
    }
    fetch(`${url}/questions`, configurationObject)
    .then(response => response.json)
    .then(json => console.log(json))
  }
}