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
  if(event.type === "keydown") {
    switch(event.key) {
      case "a":
        return 1
      case "b":
        return 2
      case "c":
        return 3
      case "d": 
        return 4
      case "1":
        return 1
      case "2":
        return 2
      case "3":
        return 3
      case "4":
        return 4
      default:
        return "invalid selection"
    }
  } else {
    return parseInt(event.target.id);
  }
}