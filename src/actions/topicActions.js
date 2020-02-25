export function createTopic(url, topicName, projectId, token) {
  console.log('C') // Fires second because it is called before async function
  return dispatch => {
    dispatch({ type: 'CREATING_TOPIC' });
    const configurationObject = {
        method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
          authorization: token
        },
        body: JSON.stringify({
          name: topicName,
          project_id: projectId
        })
      }
    fetch(`${url}/topics`, configurationObject)
      .then(response => response.json())
      .then(json => {    
        
        dispatch({ type: 'ADD_TOPIC', topic: json.body });
        dispatch({ type: 'ADD_TOPIC_TO_TOPICS', topic: json.body });
      });
  }
}

export function deleteTopic(url, topicId, token) {
  return dispatch => {
    const configurationObject = {
      method: "DELETE",
      mode: "cors",
      headers: { 
        "Accept": "application/json",
        authorization: token
      }
    }
    fetch(`${url}/topics/${topicId}`, configurationObject)
    .then(response => response.json())
    .then(json => {       
      if(json.status === "success") {
        dispatch({ type: 'DELETE_TOPIC', topicId: topicId });
      }
    });
  }
}

export function getTopic(url, topicId, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_TOPIC' });
    const configurationObject = {
      headers: {
        "Authorization": token
      }
    }
    fetch(`${url}/topics/${topicId}`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_TOPIC', topic: json.body })
      });
  }
}

export function getTopics(url, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_TOPICS' });
    const configurationObject = {
      headers: {
        "Authorization": token
      }
    }
    fetch(`${url}/topics`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_TOPICS', topics: json.body })
      });
  }
}