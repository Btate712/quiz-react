import login from "./login";

function register(url, username, email, password) {
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

export default register;