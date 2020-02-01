export function createTopic(url, topicName, token) {
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
          name: topicName
        })
      }
      fetch(`${url}/topics`, configurationObject)
        .then(response => response.json())
        .then(json => {       
          dispatch({ type: 'ADD_TOPIC', topic: json.body });
        });
  }
}

export function deleteTopic(topicId, token) {
  return dispatch => {
    dispatch({ type: 'DELETING_TOPIC' });
    const configurationObject = {
        method: "DELETE",
        mode: "cors",
        headers: { 
          "Accept": "application/json",
           authorization: token
        }
      }
      fetch(`/topics/${topicId}`, configurationObject)
        .then(response => response.json())
        .then(json => {       
          if(json.status === "success") {
            console.log("topic deleted");
            document.location.href="/topics";
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
  console.log("token in getTopics: ", token);
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