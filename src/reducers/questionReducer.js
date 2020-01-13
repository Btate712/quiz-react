const questionReducer = (state = { question: {}, inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUESTION':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_QUESTION':
      return {
        question: action.question,
        inProgress: false
      }

    default:
      return state;
  }
}

export default questionReducer;