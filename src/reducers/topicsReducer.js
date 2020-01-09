const topicsReducer = (state = { topicList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_TOPICS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_TOPICS':
      return {
        topicList: action.topics,
        inProgress: false
      }

    default:
      return state;
  }
}

export default topicsReducer;
