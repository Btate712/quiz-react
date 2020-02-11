const commentsReducer = (state = { comments: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_COMMENTS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_COMMENTS':
      return {
        ...state,
        comments: action.comments,
        inProgress: false
      }

      case 'CLEAR_COMMENTS':
        return {
          ...state,
          comments: []
        }
    default:
      return state;
  }
}

export default commentsReducer;