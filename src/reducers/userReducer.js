const userReducer = (state = { name: "", password: "", inProgress: false }, action) => {
  switch(action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        inProgress: true
      }

    case 'LOGGED_IN':
      return {
        ...state,
        inProgress: false,
        loggedIn: true
      }

    case 'CHECKING_TOKEN':
      return {
        ...state,
        inProgress: true
      }

    default:
      return state;
  }
}

export default userReducer;
