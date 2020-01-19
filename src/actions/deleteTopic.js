function deleteTopic(url, topicId) {
  return dispatch => {
    dispatch({ type: 'DELETING_TOPIC' });
    const configurationObject = {
        method: "DELETE",
        headers: { 
           authorization: sessionStorage.getItem("jwtToken")
        }
      }
      fetch(`/topics/${topicId}`, configurationObject)
        .then(response => response.json())
        .then(json => {       
          alert(json.message);
        });
  }
}

export default deleteTopic;