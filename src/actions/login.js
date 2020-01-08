function login(url, username, password) {
  return dispatch => {
    dispatch({ type: 'LOGGING_IN' });
    const configurationObject = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username: username, password: password })
    }
    fetch(`${url}/auth/login`, configurationObject)
      .then(response => response.json())
      .then(json => {
        if (json.message === "Login Successful") {
          dispatch({ type: 'LOGGED_IN' });
          sessionStorage.setItem('jwtToken', json.access_token);
        }
      });
  }
}

export default login;
