export function getProjects(url, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_PROJECTS' });
    const configurationObject = {
      headers: {
        authorization: token
      }
    }
    fetch(`${url}/projects`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_PROJECTS', projects: json.projects })
      });
  }
}

export function assignProject(url, userId, projectId, token) {
  const configurationObject = {
    method: "POST",
    mode: "cors",
    headers: { 
      "Content-type": "application/json",
      "Accept": "application/json",
      authorization: token
    },
    body: JSON.stringify({
      user_id: userId,
      project_id: projectId,
      access_level: 10
    })
}
fetch(`${url}/user_projects`, configurationObject)
  .then(response => response.json())
  .then(json => {
    alert(json.message);
  })
}

export function addTopicToProject(url, topicId, projectId, token) {
  const configurationObject = {
    method: "POST",
    mode: "cors",
    headers: { 
      "Content-type": "application/json",
      "Accept": "application/json",
      authorization: token
    },
    body: JSON.stringify({
      topic_id: topicId,
      project_id: projectId,
    })
}
fetch(`${url}/project_topics`, configurationObject)
  .then(response => response.json())
  .then(json => {
    alert(json.message);
  })
}
