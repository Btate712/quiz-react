function getTopics(url) {
  return dispatch => {
    dispatch({ type: 'LOADING_TOPICS' });
    const configurationObject = {
      headers: {
        "Authorization": sessionStorage.getItem("jwtToken")
      }
    }
    fetch(`${url}/topics`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_TOPICS', topics: json.body })
      });
  }
}

export default getTopics;
