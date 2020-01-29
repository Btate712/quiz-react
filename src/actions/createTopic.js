function createTopic(url, topicName) {
  return dispatch => {
    dispatch({ type: 'CREATING_TOPIC' });
    const configurationObject = {
        method: "POST",
        headers: { 
          "Content-type": "application/json",
          authorization: sessionStorage.getItem("jwtToken")
        },
        body: JSON.stringify({
          name: topicName
        })
      }
      fetch(`${url}/topics`, configurationObject)
        .then(response => response.json())
        .then(json => {       
          dispatch({ type: 'ADD_TOPIC', topic: json.body });
          document.location.href="/topics";
        });
  }
}

export default createTopic;