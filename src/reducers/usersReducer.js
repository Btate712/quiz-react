const usersReducer = (state = { userList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_USERS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_USERS':
      return {
        userList: action.users,
        inProgress: false
      }

    default:
      return state;
  }
}

export default usersReducer;