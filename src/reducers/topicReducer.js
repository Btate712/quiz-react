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

    default:
      return state;
  }
}

export default topicReducer;