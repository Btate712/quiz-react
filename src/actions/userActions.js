export function checkToken(url, token) {
  return dispatch => {
    dispatch({ type: 'CHECKING_TOKEN' });
    const configurationObject = {
      headers: {
        "Content-type": "application/json",
        "Authorization": token
     },
    }
    fetch(`${url}/test`, configurationObject)
      .then(response => response.json())
      .then(json => {
        if(json.status === "success") {
          dispatch({ type: 'LOGGED_IN' });
        } else {
          dispatch({ type: 'LOGIN_FAILED' });
        }
      });
  }
}

export function login(url, username, password) {
  return dispatch => {
    dispatch({ type: 'LOGGING_IN', action: { username: username, password: password } });
    let configurationObject = {
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
        const token = json.access_token;
        configurationObject = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            authorization: token
          }
        } 
        fetch(`${url}/users/me`, configurationObject)
        .then(response => response.json())
        .then(user => {
          console.log(user);
          dispatch({ 
            type: 'LOGGED_IN', 
            token: token, 
            admin: user.user.is_admin,
            projects: user.projects
          });
        })
      } else {
        dispatch({ type: 'LOGIN_FAILED' });
      }
    });
  }
}

export function logout() {
  return dispatch => {
    dispatch({ type: 'LOG_OUT' });
    dispatch({ type: 'CLEAR_USERS' });
    dispatch({ type: 'CLEAR_TOPICS' });
    dispatch({ type: 'CLEAR_TOPIC' });
    dispatch({ type: 'RESET_QUIZ' });
    dispatch({ type: 'CLEAR_QUESTIONS' });
    dispatch({ type: 'CLEAR_QUESTION' });
    dispatch({ type: 'CLEAR_PROJECTS' });
  }
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
          dispatch(login(url, username, password));
        } 
      })
  }
}

export function getUsers(url, token) {
  return dispatch => {
    dispatch({ type: 'LOADING_USERS' });
    const configurationObject = {
      headers: {
        authorization: token
      }
    }
    fetch(`${url}/users`, configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_USERS', users: json.users })
      });
  }
}