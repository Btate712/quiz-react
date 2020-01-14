function logout() {
  sessionStorage.setItem('jwtToken', "");
  sessionStorage.setItem('loggedIn', false);
  sessionStorage.setItem('username', "");
  sessionStorage.setItem('password', "");
  return dispatch => {
    dispatch({ type: 'LOG_OUT' });
  }
}

export default logout;
