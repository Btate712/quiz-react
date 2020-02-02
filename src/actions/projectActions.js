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
        console.log("in action, json is: ", json)
        dispatch({ type: 'ADD_PROJECTS', projects: json.projects })
      });
  }
}