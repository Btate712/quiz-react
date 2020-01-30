function storeQuizResults(url, questions) {
  return dispatch => {
    dispatch({ type: 'STORING_RESULTS' });
    const configurationObject = {
        method: "POST",
        headers: { 
          "Content-type": "application/json",
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
          // document.location.href="/home";
        });
  }
}

export default storeQuizResults;