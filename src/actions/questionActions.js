export function deleteQuestion(url, questionId, token) {
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
    fetch(`${url}/questions/${questionId}`, configurationObject)
    dispatch({ type: 'CLEAR_QUESTION' });
  }
}

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
  return () => {
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
  }
}

export function updateQuestion(url, question, id, token) {
  return () => {
    const configurationObject = {
      method: "PATCH",
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
    fetch(`${url}/questions/${id}`, configurationObject)
  }
}

export function numberToLetter(number) {
  switch (number) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
    default:
      return "Not Found"
  }  
}