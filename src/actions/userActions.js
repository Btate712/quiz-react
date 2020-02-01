export function checkToken(url) {
  return dispatch => {
    dispatch({ type: 'CHECKING_TOKEN' });
    const configurationObject = {
      headers: {
        "Content-type": "application/json",
        "Authorization": sessionStorage.getItem('jwtToken')
     },
    }
    fetch(`${url}/test`, configurationObject)
      .then(response => response.json())
      .then(json => {
        if(json.status === "success") {
          sessionStorage.setItem("loggedIn", true);
          dispatch({ type: 'LOGGED_IN' });
        } else {
          sessionStorage.setItem("loggedIn", false);
          dispatch({ type: 'LOGIN_FAILED' });
        }
      });
  }
}

export function login(url, username, password) {
  return dispatch => {
    dispatch({ type: 'LOGGING_IN', action: { username: username, password: password } });
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: 
        { 
          "Content-type": "application/json" ,
          "Accept": "application/json" 
        },
      body: JSON.stringify({ 
        username: username, 
        password: password 
      })
    }
  fetch(`${url}/auth/login`, configurationObject)
    .then(response => response.json())
    .then(json => {
      if (json.message === "Login Successful") {
        dispatch({ type: 'LOGGED_IN', token: json.access_token });
      } else {
        dispatch({ type: 'LOGIN_FAILED' });
      }
    });
  }
}

export function logout() {
  return dispatch => dispatch({ type: 'LOG_OUT' });
}

export function register(url, username, email, password) {
  return dispatch => {
    dispatch({ type: 'CREATING_NEW_USER', action: { username: username, password: password, email: email } });
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: { 
        "Content-type": "application/json",
        "Accept": "application/json"
     },
      body: JSON.stringify({ 
        name: username, 
        email: email, 
        password: password })
    }
    fetch(`${url}/auth/register`, configurationObject)
      .then(response => response.json())
      .then(json => {
        if (json.message === "User created successfully") {
          sessionStorage.setItem('loggedIn', true);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          sessionStorage.setItem('lastLogin', new Date().getMinutes());
        } 
      })
      .then(() => { login(url, username, password); });
    
  }
}