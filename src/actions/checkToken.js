function checkToken(url) {
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
          dispatch({ type: 'LOGGED_IN' });
        }
      });
  }
}

export default checkToken;
