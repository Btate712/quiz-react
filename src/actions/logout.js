function logout() {
  return dispatch => {
    dispatch({ type: 'LOG_OUT' });
  }
}

export default logout;
