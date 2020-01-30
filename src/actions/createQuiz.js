function createQuiz(url, numberOfQuestions, topics) {
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

export default createQuiz;