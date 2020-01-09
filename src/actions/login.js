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
          sessionStorage.setItem('jwtToken', json.access_token);
          sessionStorage.setItem("loggedIn", true);
          dispatch({ type: 'LOGGED_IN' });
        } else {
          dispatch({ type: 'LOGIN_FAILED' });
        }
      });
  }
}

export default login;
