const questionReducer = (state = { question: {}, comments: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUESTION':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_QUESTION':
      return {
        question: action.question.question,
        comments: action.question.comments,
        inProgress: false
      }

    case 'CLEAR_QUESTION':
      return {
        ...state,
        question: {},
        comments: []
      }
      
    default:
      return state;
  }
}

export default questionReducer;