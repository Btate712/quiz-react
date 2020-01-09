function logout() {
  console.log("Logging out...");
  return dispatch => {
    sessionStorage.setItem('jwtToken', "");
    sessionStorage.setItem("loggedIn", false);
    dispatch({ type: 'LOG_OUT' });
  }
}

export default logout;
