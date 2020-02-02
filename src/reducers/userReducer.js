const userReducer = (state = { name: "", admin: false, inProgress: false, loggedIn: false, token: "" }, action) => {
  switch(action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        name: action.action.username,
        inProgress: true
      }

    case 'LOGGED_IN':
      console.log(action)
      return {
        ...state,
        inProgress: false,
        loggedIn: true,
        token: action.token,
        admin: action.admin
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
        inProgress: false,
        loggedIn: false,
        admin: false
      }

    default:
      return state;
  }
}

export default userReducer;
