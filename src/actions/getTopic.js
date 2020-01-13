function getTopic(url, topicId) {
  return dispatch => {
    dispatch({ type: 'LOADING_TOPIC' });
    const configurationObject = {
      headers: {
        "Authorization": sessionStorage.getItem("jwtToken")
      }
    }
    fetch(`${url}/topics/${topicId}`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_TOPIC', topic: json.body })
      });
  }
}

export default getTopic;