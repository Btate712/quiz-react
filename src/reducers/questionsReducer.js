const questionsReducer = (state = { questionList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUESTIONS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_QUESTIONS':
      return {
        questionList: action.questions,
        inProgress: false
      }

    default:
      return state;
  }
}

export default questionsReducer;