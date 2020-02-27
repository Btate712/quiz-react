export function createQuiz(url, numberOfQuestions, topics, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_QUIZ' });
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: { 
        "Content-type": "application/json",
        "Accept": "application/json",
        authorization: token
      },
      body: JSON.stringify({
        'topicIds': topics.toString(),
        'numberOfQuestions': numberOfQuestions
      })
    }
    fetch(`${url}/quiz`, configurationObject)
    .then(response => response.json())
    .then(json => {  
      dispatch({ type: 'ADD_QUIZ', quiz: json.quiz });
    });
  }
}

export function storeQuestionResponse(question, response) {
  return dispatch => {
    dispatch({type: 'STORE_RESPONSE', question: question, choice: response});
  }
}

export function storeQuizResults(url, questions, token) {
  return (dispatch => {
    dispatch({ type: 'STORING_RESULTS' });
    const configurationObject = {
        method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
          authorization: token
        },
        body: JSON.stringify({
          questions: questions
        })
      }
    fetch(`${url}/encounters`, configurationObject)
    .then(() => dispatch({ type: 'RESET_QUIZ' }))
  })
}

export function resetQuiz() {
  return (dispatch => {
    dispatch({ type: 'RESET_QUIZ' })
  });
}

export function getSelection(event) {
  const decoder = { 
    "a": 1, "b": 2, "c": 3, "d": 4,
    "1": 1, "2": 2, "3": 3, "4": 4 
  } 
  if(event.type === "keydown") {
    const key = decoder[event.key];
    if(key) {
      return key;
    } else {
      return "invalid selection"
    }
  } else {
    return parseInt(event.target.id);
  }
}