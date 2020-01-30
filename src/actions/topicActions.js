export function createTopic(url, topicName) {
  return dispatch => {
    dispatch({ type: 'CREATING_TOPIC' });
    const configurationObject = {
        method: "POST",
        mode: "cors",
        headers: { 
          "Content-type": "application/json",
          "Accept": "application/json",
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

export function deleteTopic(topicId) {
  return dispatch => {
    dispatch({ type: 'DELETING_TOPIC' });
    const configurationObject = {
        method: "DELETE",
        mode: "cors",
        headers: { 
          "Accept": "application/json",
           authorization: sessionStorage.getItem("jwtToken")
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

export function getTopic(url, topicId) {
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

export function getTopics(url) {
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