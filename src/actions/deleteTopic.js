function deleteTopic(topicId) {
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
          if(json.status === "success") {
            console.log("topic deleted");
          }
        });
  }
}

export default deleteTopic;