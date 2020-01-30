export function createQuiz(url, numberOfQuestions, topics) {
  return dispatch => {
    dispatch({ type: 'CREATING_QUIZ' });
    const configurationObject = {
        method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
          authorization: sessionStorage.getItem("jwtToken")
        },
        body: JSON.stringify({
          'topicIds': topics.toString(),
          'numberOfQuestions': numberOfQuestions
        })
      }
      fetch(`${url}/quiz`, configurationObject)
        .then(response => response.json())
        .then(json => {       
          console.log(json);
          dispatch({ type: 'ADD_QUIZ', quiz: json.quiz });
        });
  }
}

export function storeQuestionResponse(question, response) {
  return dispatch => {
    dispatch({type: 'STORE_RESPONSE', question: question, choice: response});
  }
}

export function storeQuizResults(url, questions) {
  return dispatch => {
    dispatch({ type: 'STORING_RESULTS' });
    const configurationObject = {
        method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
          authorization: sessionStorage.getItem("jwtToken")
        },
        body: JSON.stringify({
          questions: questions
        })
      }
      console.log(configurationObject);
      fetch(`${url}/encounters`, configurationObject)
        .then(response => response.json())
        .then((json) => {
          console.log(json);       
          dispatch({ type: 'RESULTS_STORED' });
          document.location.href="/home";
        });
  }
}