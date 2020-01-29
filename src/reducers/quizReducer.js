const quizReducer = (state = { questions: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUIZ':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_QUIZ':
      console.log(action);
      return {
        questions: action.quiz,
        inProgress: false
      }

    default:
      return state;
  }
}

export default quizReducer;