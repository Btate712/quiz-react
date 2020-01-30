const quizReducer = (state = { questions: [], currentQuestion: 0, inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUIZ':
      return ({
        ...state,
        inProgress: true
      })

    case 'ADD_QUIZ':
      return ({
        ...state,
        questions: action.quiz,
        inProgress: false
      })

    case 'STORE_RESPONSE':
      const updatedQuestion = Object.assign({}, action.question);
      updatedQuestion.response = action.response;
      const newQuestions = [...state.questions];
      newQuestions[state.currentQuestion] = updatedQuestion;
      console.log(newQuestions);
      return ({
        ...state,
        questions: newQuestions,
        currentQuestion: state.currentQuestion + 1,
      })

    default:
      return state;
  }
}

export default quizReducer;