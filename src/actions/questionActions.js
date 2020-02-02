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
          topic_id: question.topicId,
          stem: question.stem,
          choice_1: question.choice1,
          choice_2: question.choice2,
          choice_3: question.choice3,
          choice_4: question.choice4,
          correct_choice: question.correctChoice
        })
    }
    fetch(`${url}/questions`, configurationObject)
    .then(response => response.json)
    .then(json => console.log(json))
  }
}