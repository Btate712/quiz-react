const topicReducer = (state = { topic: {}, inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_TOPIC':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_TOPIC':
      return {
        ...state,
        topic: action.topic,
        inProgress: false
      }

    case 'CREATING_TOPIC':
      return {
        ...state,
        topic: action.topic,
        inProgress: true
      }

    case 'CLEAR_TOPIC':
      return {
        ...state,
        topic: []
      }

      case 'ADD_QUESTION_TO_TOPIC':
        return {
          ...state,
          topic: {...state.topic, 
            questions: [...state.topic.questions, action.question]
          }
        }

      case 'UPDATE_QUESTION_IN_TOPIC':
        const index = state.topic.questions.findIndex(question => action.question.id === question.id);
        const { questions } = state.topic
        return {
          ...state,
          topic: {...state.topic,
            questions: [...questions.slice(0, index), action.question, ...questions.slice(index + 1)]
          }
        }
    default:
      return state;
  }
}

export default topicReducer;