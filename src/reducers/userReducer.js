const userReducer = (state = { name: "", password: "", inProgress: false, loggedIn: false }, action) => {
  switch(action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        name: action.action.username,
        password: action.action.password,
        inProgress: true
      }

    case 'LOGGED_IN':
      return {
        ...state,
        inProgress: false,
        loggedIn: true
      }

    case 'LOGIN_FAILED':
      return {
        ...state,
        inProgress: false,
        loggedIn: false
      }

    case 'CHECKING_TOKEN':
      return {
        ...state,
        inProgress: true
      }

    case 'LOG_OUT':
      return {
        ...state,
        name: "",
        password: "",
        inProgress: false,
        loggedIn: false
      }

    default:
      return state;
  }
}

export default userReducer;
